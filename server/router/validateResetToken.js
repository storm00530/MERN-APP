const express = require("express");
const router = express.Router();
const path = require("path");
const userModel = require("../models/user_schema");
const auth = require("../middleware/auth");

router.post("/", (req, res) => {
    console.log("token", req.body)
    userModel.findOne({ resetPasswordToken: req.body.token, resetPasswordExpires: { $gt: Date.now() } }, function(err, user) {
        if (!user) {
          return res.status(401).json({success:false, error:true})
        }
       return res.status(200).json({success:true})
      });
});

module.exports = router;
