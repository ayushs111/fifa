const Match = require("../models/Match");

exports.add = async function (req, res) {
  try {
    // let data = await Data.find();
    let addData = await Match.create({
      team1: req.body.team1id,
      team2: req.body.team2id,
      date: req.body.date,
      time: req.body.time,
      venue: req.body.venue,
      matchType: req.body.matchType,
      prediction: req.body.prediction
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

