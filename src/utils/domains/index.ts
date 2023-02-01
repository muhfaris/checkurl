var domains = (function () {
  let domains = new Map();
  domains.set("tokopedia.com", "Tokopedia");
  domains.set("www.tokopedia.com", "Tokopedia");

  domains.set("shopee.co.id", "Shopee");
  domains.set("www.shopee.co.id", "Shopee");

  domains.set("shopee.cl", "Shopee");
  domains.set("www.shopee.cl", "Shopee");

  domains.set("shopee.cn", "Shopee");
  domains.set("www.shopee.cn", "Shopee");

  domains.set("shopee.co.id", "");
  domains.set("www.shopee.co.id", "Shopee");

  domains.set("shopee.co.th", "");
  domains.set("www.shopee.co.th", "Shopee");

  domains.set("shopee.com", "");
  domains.set("www.shopee.com", "Shopee");

  domains.set("shopee.com.br", "Shopee");
  domains.set("www.shopee.com.br", "Shopee");

  domains.set("shopee.com.co", "Shopee");
  domains.set("www.shopee.com.co", "Shopee");

  domains.set("shopee.com.mx", "Shopee");
  domains.set("www.shopee.com.mx", "Shopee");

  domains.set("shopee.com.my", "Shopee");
  domains.set("www.shopee.com.my", "Shopee");

  domains.set("shopee.es", "Shopee");
  domains.set("www.shopee.es", "Shopee");

  domains.set("shopee.fr", "Shopee");
  domains.set("www.shopee.fr", "Shopee");

  domains.set("shopee.id", "Shopee");
  domains.set("www.shopee.id", "Shopee");

  domains.set("shopee.in", "Shopee");
  domains.set("www.shopee.in", "Shopee");

  domains.set("shopee.io", "Shopee");
  domains.set("www.shopee.io", "Shopee");

  domains.set("shopee.ph", "Shopee");
  domains.set("www.shopee.ph", "Shopee");

  domains.set("shopee.sg", "Shopee");
  domains.set("www.shopee.sg", "Shopee");

  domains.set("shopee.tw", "Shopee");
  domains.set("www.shopee.tw", "Shopee");

  domains.set("shopee.vn", "Shopee");
  domains.set("www.shopee.vn", "Shopee");

  domains.set("shopeemobile.com", "Shopee");
  domains.set("www.shopeemobile.com", "Shopee");

  domains.set("shp.ee", "Shopee");
  domains.set("www.shp.ee", "Shopee");

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
