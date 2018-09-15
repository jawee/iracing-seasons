const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RaceRowSchema = mongoose.Schema({
    race: { type: Schema.Types.ObjectId, ref: 'Race' },
    driver: { type: Schema.Types.ObjectId, ref: 'Driver' },
    car: String,
    position: Number,
    startposition: Number,
    incidents: Number,
    points: Number,
    infractionpoints: Number,
    penaltypoints: Number,
}, {
    timestamps: true
});

module.exports = mongoose.model('RaceRow', RaceRowSchema);