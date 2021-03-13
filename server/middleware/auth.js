const userModel = require("../models/user_schema");

let auth = (req, res, next) => {
  var token = req.cookies.x_auth;
  console.log("token: ", token);
  userModel.findByToken(token, (err, user) => {
    if (err) throw err;
    if (!user) return res.status(400).json({ isAuth: false, error: true });
    req.token = token;
    req.user = user;
    next();
  });
};

module.exports = auth;
