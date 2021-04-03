const express = require("express");
const router = express.Router();
const WooCommerce = require("../../services/woocommerce");

router.get("/", function (req, res) {
  const pageId = req.pageId;
  const numberPerPage = req.numberPerPage;

  WooCommerce.getAsync(
    "customers?page=" +
      pageId +
      "&per_page=" +
      numberPerPage +
      "&status=publish&orderby=registered_date&order=desc"
  )
    .then((result) => {
      const customers = JSON.parse(result.toJSON().body);
      if (!customers) {
        res.json({ success: false, message: "no Customers found" });
      } else {
        res.json({ pageCustomers: customers });
      }
    })
    .catch((err) => {
      res.status(500).send("Internal Error");
    });
});

module.exports = router;
