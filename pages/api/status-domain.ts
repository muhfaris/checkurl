import { GetListDomain } from "@/src/utils/domains";
import { DomainOwnership } from "@/src/utils/domains/type";
import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<DomainOwnership[]>
) {
  let domains = GetListDomain();
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
  const promises = domains.map(async (domain) => {
    const url = `https://${domain.domain}`;
    try {
      const response = await axios.request({
        method: "head",
        url: url,
        timeout: 3000,
      });
      if (response.status < 400) {
        return Object.assign({}, domain, { is_active: true });
      }

      return Object.assign({}, domain, { is_active: false });
    } catch (e:any) {
      // console.log(`url:${url} - ${e.code}`);
      switch (e?.code) {
        case "ENOTFOUND":
          return Object.assign({}, domain, {
            is_active: false,
            note: "domain not found",
          });

        case "ECONNABORTED":
          return Object.assign({}, domain, {
            is_active: false,
            note: "response timeout",
          });

        case "ERR_FR_TOO_MANY_REDIRECTS":
          return Object.assign({}, domain, {
            is_active: false,
            note: "website too many redirect",
          });

        default:
          return Object.assign({}, domain, {
            is_active: false,
            note: "unkown",
          });
      }
    }
  });

  const updateDomains = await Promise.all(promises);

  res.setHeader(
    "Cache-Control",
    "public, s-maxage=3600, stale-while-revalidate=900"
  );
  return res.status(200).json(updateDomains);
}
