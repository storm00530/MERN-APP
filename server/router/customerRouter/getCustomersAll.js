const express = require("express");
const router = express.Router();
const userModel = require("../../models/user_schema");
const WooCommerce = require("../../services/woocommerce");
router.get("/", function (req, res) {
  WooCommerce.getAsync("customers").then(function (result) {
    const customers = JSON.parse(result.toJSON().body);
    return res.status(200).json({ allCustomers: customers.length });
  });
});

module.exports = router;
