const express = require("express");
const router = express.Router();
const userRouter = require("./userRouter");
const productRouter = require("./productRouter");
const customerRouter = require("./customerRouter");

router.get("/", function (req, res) {
  res.send("hello world");
});

router.use("/user", userRouter);
router.use("/products", productRouter);
router.use("/customers", customerRouter);
module.exports = router;
