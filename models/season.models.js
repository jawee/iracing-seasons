const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SeasonSchema = mongoose.Schema({
    name: String,
    races: [{ type: Schema.Types.ObjectId, ref: 'Race' }]
}, {
    timestamps: true
});

module.exports = mongoose.model('Season', SeasonSchema);