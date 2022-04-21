const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.login = async function (req, res, next) {
  try {
    let email = req.body.email;

    let data = await User.findOne({ email });

    if (!data) {
      throw new Error("Please enter valid email");
    } else {
      let pass = req.body.password;
      let checkUser = await bcrypt.compare(pass, data.password);
      if (!checkUser) {
        throw new Error("Please enter valid password");
      } else {
        var token = await jwt.sign({ id: data._id }, "malkari");
        res.status(200).json({
          status: "success",
          message: data,
          token,
        });
      }
    }
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.signUp = async function (req, res, next) {
  try {

    let pass = req.body.password;
    let cPass = req.body.cPassword;

    if(pass.length < 6 ){
      throw new Error("Password minlength is 8");
    }
    if (pass != cPass) {
      throw new Error("Password must be same");
    }
    let user = { ...req.body };
    user.password = await bcrypt.hash(pass, 15);
    user.cPassword = undefined;
    let newUser = await User.create(user);
    var token = await jwt.sign({ id: newUser._id }, "malkari");
    res.status(201).json({
      status: "success",
      data: newUser,
      token,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.protect = async function (req, res, next) {
  try {
    console.log("Middleware call");

    let token = req.headers.authorization;
    if (!token) {
      throw new Error("Please send token");
    }

    let tokenData = await jwt.verify(token, "malkari");

    let checkUser = await User.findById(tokenData.id);

    if (!checkUser) {
      throw new Error("User Not Found");
    }
    next();
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};
