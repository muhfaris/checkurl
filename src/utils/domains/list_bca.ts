import { DomainOwnership } from "./type";

export default function listDomainBCA(): DomainOwnership[] {
  return [
    { domain: "bca.co.id", name: "BCA Official Website" },
    { domain: "klikbca.com", name: "BCA Official KlikBCA" },
    { domain: "ibank.klikbca.com", name: "BCA Web Banking" },
  ];
}
