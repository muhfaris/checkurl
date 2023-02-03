import { DomainOwnership } from "./type";
import listDomainShopee from "./list_shopee";
import listDomainTokopedia from "./list_tokopedia";
import listDomainBlibli from "./list_blibli";
import listDomainBCA from "./list_bca";
import listDomainBNI from "./list_bni";
import listDomainBRI from "./list_bri";
import listDomainMandiri from "./list_mandiri";

var domains = (function () {
  let domains = new Map();
  listDomainTokopedia().map((dt: DomainOwnership) => {
    domains.set(dt.domain, dt.name);
    domains.set(`www.${dt.domain}`, dt.name);
  });

  listDomainShopee().map((ds: DomainOwnership) => {
    domains.set(ds.domain, ds.name);
    domains.set(`www.${ds.domain}`, ds.name);
  });

  listDomainBlibli().map((db: DomainOwnership) => {
    domains.set(db.domain, db.name);
    domains.set(`www.${db.domain}`, db.name);
  });

  listDomainBCA().map((db: DomainOwnership) => {
    domains.set(db.domain, db.name);
    domains.set(`www.${db.domain}`, db.name);
  });

  listDomainBNI().map((db: DomainOwnership) => {
    domains.set(db.domain, db.name);
    domains.set(`www.${db.domain}`, db.name);
  });

  listDomainBRI().map((db: DomainOwnership) => {
    domains.set(db.domain, db.name);
    domains.set(`www.${db.domain}`, db.name);
  });

  listDomainMandiri().map((db: DomainOwnership) => {
    domains.set(db.domain, db.name);
    domains.set(`www.${db.domain}`, db.name);
  });


  return {
    get: function (key: string): string {
      return domains.get(key);
    },
    exist: function (key: string): boolean {
      return domains.has(key);
    },
  };
})();

export function GetListDomain(): DomainOwnership[] {
  let domains: DomainOwnership[] = [];
  domains.push(
    ...listDomainBlibli(),
    ...listDomainShopee(),
    ...listDomainTokopedia(),
    ...listDomainBCA(),
    ...listDomainBNI(),
    ...listDomainBRI(),
    ...listDomainMandiri(),
  );
  return domains;
}

export default domains;
