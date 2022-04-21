const Prediction = require("../models/Prediction");

exports.add = async function (req, res) {
  try {
    
    res.status(201).json({
      status: "success",
      addData: addData,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

