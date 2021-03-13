const express = require("express");
const router = express.Router();
const path = require("path");
const register = require("./register");
const login = require("./login");
const auth = require("./auth");
const logout = require("./logout");

router.get("/", function (req, res) {
  res.send("hello world");
});

router.use("/register", register);
router.use("/login", login);
router.use("/auth", auth);
router.use("/logout", logout);
module.exports = router;
