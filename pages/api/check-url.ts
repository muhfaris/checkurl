// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import domains from "./../../src/utils/domains";
import ValidURL from "./../../src/utils/urllib";

type TraceURL = {
  url: string;
  status: number;
  name: string;
  valid?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try {
    const { query, method } = req;
    const urls = query?.url;

    if (!urls) {
      return res.status(400).json({ error: "url query is required" });
    }

    if (Array.isArray(urls)) {
      return res.status(400).json({
        error: "the value of url query is exceeded, maximum one url query!",
      });
    }

    if (method != "GET") {
      return res.status(405).json({ error: "method not allowed" });
    }

    // const data = await requestURL("https://bit.ly/365_Plan2023"); // redirect
    const data = await requestURL(urls); // 200
    // const data = await requestURL("https://bit.ly/3RjLNgt"); // bit.ly + 200
    // const data = await requestURL("https://bit.ly/3XPCtne"); // 200 1
    res.status(200).json({ data: data });
  } catch (error) {
    res
      .status(500)
      .json({ error: "internal server error, please contact admin!" });
  }
}

async function requestURL(url: string): Promise<TraceURL[]> {
  return new Promise((resolve, reject) => {
    axios
      .request({
        method: "head",
        url: url,
        maxRedirects: 0,
      })
      .then((result) => {
        let traces: TraceURL[] = [];
        let tmpURL = result?.headers["location"];
        let reqURL = result?.config?.url || "";
        if (!reqURL || reqURL == "") {
          return;
        }

        if (tmpURL) {
          tmpURL = GetURL(reqURL, tmpURL);
        }

        const trace = {
          name: result?.statusText,
          status: result?.status,
          url: tmpURL,
          valid: "-",
        };

        const validURL = ValidURL(tmpURL);
        if (validURL) {
          traces.push(trace);
          return requestURL(tmpURL).then((nextData) =>
            resolve([...traces, ...nextData])
          );
        }

        // doesn't have redirect url

        const reqValid = ValidURL(reqURL);
        if (reqValid) {
          const ru = ParseURL(reqURL);
          if (!ru) {
            // undefined
            return;
          }
          trace.url = reqURL;

          const td = domains.get(ru.host);
          if (td) {
            trace.valid = `this official domain from ${td}`;
          }
        }

        traces.push(trace);
        resolve([...traces]);
        return;
      })
      .catch((error) => {
        // redirect in here
        let traces: TraceURL[] = [];
        let tmpURL = error.response?.headers?.["location"];
        let reqURL = error.response?.config?.url;
        tmpURL = GetURL(reqURL, tmpURL);

        const trace = {
          name: error.response?.statusText,
          status: error.response?.status,
          url: tmpURL,
          valid: "-",
        };

        // replace name
        switch (trace.status) {
          case 303:
            trace.name = `${error.response?.statusText} redirect`;
        }

        if (tmpURL) {
          const ru = ParseURL(tmpURL);
          if (ru) {
            const td = domains.get(ru.host);
            if (td) {
              trace.valid = `this official domain from ${td}`;
            }
          }

          traces.push(trace);
          return requestURL(tmpURL).then((nextData) => {
            const nd = nextData?.[0];
            const match = traces.findIndex((t) => t.url == nd?.url);
            if (match >= 0) {
              traces[match].valid = nd?.valid;
              resolve([...traces]);
              return;
            }
            resolve([...traces, ...nextData]);
          });
        }
        resolve(traces);
      });
  });
}

function GetURL(requestURL: string, url: string): string | undefined {
  const valid = ValidURL(url);
  if (valid) {
    return url;
  }

  const hu = ParseURL(requestURL);
  if (hu) {
    return `${hu.origin}${url}`;
  }

  return;
}

function ParseURL(url: string): URL | undefined {
  const valid = ValidURL(url);
  if (valid) {
    return new URL(url);
  }
}
