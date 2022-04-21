const Team = require("../models/Team");

exports.add = async function (req, res) {
  try {
    let find = await Team.find({ name: req.body.name });
    if (find[0]) {
      res.status(406).json({
        status: "fail",
        message: "This team is already added !",
      });
    } else {
      let addData = await Team.create({
        name: req.body.name,
        photo: req.file.path,
        team: [
          { playerid: "625f9ba618e0d0d458053c51", role: "asdf" },
          { playerid: "625f9c6e18e0d0d458053c53", role: "dda" },
         
        ],
      });
      res.status(201).json({
        status: "success",
        addData: addData,
      });
    }
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};
exports.get = async function (req, res) {
  try {
    let addData = await Team.find().populate("players.player").exec();
    res.status(201).json({
      status: "success",
      teams: addData,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};
exports.getOne = async function (req, res) {
  try {
    let addData = await Team.findById(req.params.id).populate("players.player").exec();
    res.status(201).json({
      status: "success",
      teams: addData,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};
