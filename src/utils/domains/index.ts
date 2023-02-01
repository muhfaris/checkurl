import { DomainOwnership } from "./type";
import listDomainShopee from "./list_shopee";
import listDomainTokopedia from "./list_tokopedia";

var domains = (function () {
  let domains = new Map();
  listDomainTokopedia().map((dt: DomainOwnership) => {
    domains.set(dt.domain, dt.name);
  });

  listDomainShopee().map((ds: DomainOwnership) => {
    domains.set(ds.domain, ds.name);
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
