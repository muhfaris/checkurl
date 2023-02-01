import { DomainOwnership } from "./type";
import listDomainShopee from "./list_shopee";
import listDomainTokopedia from "./list_tokopedia";
import listDomainBlibli from "./list_blibli";

var domains = (function () {
  let domains = new Map();
  listDomainTokopedia().map((dt: DomainOwnership) => {
    domains.set(dt.domain, dt.name);
  });

  listDomainShopee().map((ds: DomainOwnership) => {
    domains.set(ds.domain, ds.name);
  });

  listDomainBlibli().map((db: DomainOwnership) => {
    domains.set(db.domain, db.name);
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

export default domains;
