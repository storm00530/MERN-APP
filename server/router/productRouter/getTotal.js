const express = require("express");
const router = express.Router();

const WooCommerce = require("../../services/woocommerce");

router.get("/", function (req, res) {
  WooCommerce.getAsync("products").then(function (result) {
    const products = JSON.parse(result.toJSON().body);
    return res.status(200).json({ allProducts: products.length });
  });
});

module.exports = router;
