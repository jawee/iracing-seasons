const mongoose = require('mongoose');

const DriverSchema = mongoose.Schema({
    customerId: Number,
    name: String,
    driverNumber: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Driver', DriverSchema);