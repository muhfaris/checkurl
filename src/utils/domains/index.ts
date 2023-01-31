var domains = (function () {
  let domains = new Map();
  domains.set("tokopedia.com", "Tokopedia");
  domains.set("www.tokopedia.com", "Tokopedia")

  domains.set("shopee.co.id", "Shopee")
  domains.set("www.shopee.co.id", "Shopee")

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
