const express = require("express");
const router = express.Router();
const productTotal = require("./getTotal.js");
const productGetByPage = require("./getByPage");

router.use("/total", productTotal);
router.use(
  "/getByPage/:pageId/:numberPerPage",
  function (req, res, next) {
    req.pageId = req.params.pageId;
    req.numberPerPage = req.params.numberPerPage;
    next();
  },
  productGetByPage
);

module.exports = router;
