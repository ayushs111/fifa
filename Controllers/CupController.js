const Cup = require("../models/Cup");

exports.add = async function (req, res) {
  try {
    let addData = await Cup.create({
      
  });
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

