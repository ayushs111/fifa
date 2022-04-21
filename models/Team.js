const mongoose = require("mongoose");

const teamSchema = mongoose.Schema({
  name: { type: String, required: true },
  photo: { type: String, required: true },
  players: [
    {
      player: { type: mongoose.Schema.Types.ObjectId, ref: "Player" },
      role: { type: String, required: true },
    },
  ],
  createAt : {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Team", teamSchema);
