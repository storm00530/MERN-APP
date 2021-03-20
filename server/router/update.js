const express = require("express");
const router = express.Router();
const path = require("path");
const userModel = require("../models/user_schema");

const update = require("../middleware/update");


module.exports = router;
router.post("/", update ,async (req, res) => {
    console.log("update",req.update_user)
  const user = new userModel(req.update_user);
    user.save((err, user) => {
      if (err) return res.status(400).json({ success: false, err });
      return res.status(200).json({ success: true });
    });
});

module.exports = router;
