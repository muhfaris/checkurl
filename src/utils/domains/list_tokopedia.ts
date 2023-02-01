import { DomainOwnership } from "./type";

export default function listDomainTokopedia(): DomainOwnership[] {
  return [
    { domain: "tokopedia.com", name: "Tokopedia" },
    { domain: "www.tokopedia.com", name: "Tokopedia" },

    { domain: "tokopedia.link", name: "Tokopedia" },
    { domain: "www.tokopedia.link", name: "Tokopedia" },
  ];
}
