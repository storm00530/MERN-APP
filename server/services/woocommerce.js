const WooCommerceAPI = require("woocommerce-api");
const credentials = require("../config/WOO_API");
const WooCommerce = new WooCommerceAPI({
  url: "https://store.kandykoi.com",
  consumerKey: credentials.key,
  consumerSecret: credentials.secret,
  wpAPI: true,
  version: "wc/v1",
});

module.exports = WooCommerce;
