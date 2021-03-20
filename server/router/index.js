const express = require("express");
const router = express.Router();
const path = require("path");
const register = require("./register");
const login = require("./login");
const auth = require("./auth");
const logout = require("./logout");
const update = require("./update");

router.get("/", function (req, res) {
  res.send("hello world");
});

router.use("/register", register);
router.use("/login", login);
router.use("/auth", auth);
router.use("/logout", logout);
router.use("/update", update);
module.exports = router;
