const Player = require("../models/Player");

exports.add = async function (req, res) {
  try {
    let data = {
      name: req.body.name,
      photo: req.file.path,
      age: req.body.age,
      games: req.body.games,
      goals: req.body.goals,
      biography: req.body.biography,
    };
    let addData = await Player.create(data);
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


exports.get = async function (req, res) {
  try {
    let addData = await Player.findById(req.params.id);
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
