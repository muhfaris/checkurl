import { DomainOwnership } from "./type";

export default function listDomainBRI(): DomainOwnership[] {
  return [
    { domain: "bri.co.id", name: "BRI Official Website" },
    { domain: "ib.bri.co.id", name: "BRI Internet Banking" },
  ];
}
