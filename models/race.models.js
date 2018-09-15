const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RaceSchema = mongoose.Schema({
    season: { type: Schema.Types.ObjectId, ref: 'Season' },
    raceNumber: Number,
    track: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Race', RaceSchema);