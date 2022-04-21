const mongoose = require('mongoose');

const matchSchema = mongoose.Schema({
    team1: { type: mongoose.Schema.Types.ObjectId, ref: 'Team' },
    team2: { type: mongoose.Schema.Types.ObjectId, ref: 'Team' },
    date: { type: String, required: true },
    time: { type: String, required: true },
    venue: { type: String, required: true },
    matchType: { type: String, required: true },
    prediction: [
        {
            team1: { type: String },
            team2: { type: String },
        }
    ]
    
});

module.exports = mongoose.model('Matches', matchSchema);