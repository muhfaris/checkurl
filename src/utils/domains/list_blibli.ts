import { DomainOwnership } from "./type";

export default function listDomainBlibli(): DomainOwnership[] {
  return [
    { domain: "blibli.com", name: "Blibli" },
    { domain: "www.blibli.com", name: "Blibli" },

    { domain: "blibli.co.id", name: "Blibli" },
    { domain: "www.blibli.co.id", name: "Blibli" },

    { domain: "blibli.app.link", name: "Blibli" },
    { domain: "www.blibli.app.link", name: "Blibli" },
  ];
}
