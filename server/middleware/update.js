const userModel = require("../models/user_schema");

let update = (req, res, next) => {
  var token = req.cookies.x_auth;
  const user = new userModel(req.body);
  console.log("token", token);
  if (!token)
    return res.status(200).json({ isUpdate: false, error: "unauthorized" });
  userModel.findByToken(token, (err, user) => {
    if (err) throw err;
    if (!user) return res.status(200).json({ isUpdate: false, error: true });

    userModel.deleteOne({ _id: user._id }, function (err) {
      if (err) return handleError(err);
      req.update_user = req.body;
      req.update_user.token = token;
      next();
    });
  });
};

module.exports = update;
