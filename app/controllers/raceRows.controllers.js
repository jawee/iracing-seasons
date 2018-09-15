const RaceRow = require('../../models/raceRow.models.js');

// Create and Save a new Note
exports.create = (req, res) => {
    // Create a Note
    const racerow = new RaceRow({
        race: req.body.race,
        driver: req.body.driver,
        car: req.body.car,
        position: req.body.position,
        startposition: req.body.startposition,
        incidents: req.body.incidents,
        points: req.body.points,
        infractionpoints: rec.body.infractionpoints,
        penaltypoints: rec.body.penaltypoints,
    });

    // Save Note in the database
    racerow.save()
    .then(racerow => {
        res.send(racerow);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the RaceRow."
        });
    });
};

// Retrieve and return all notes from the database.
exports.findAll = (req, res) => {
	RaceRow.find()
    .then(racerows => {
        res.send(racerows);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving RaceRows."
        });
    });
};

// Find a single note with a noteId
exports.findOne = (req, res) => {
	RaceRow.findById(req.params.raceRowId)
    .then(racerow => {
        if(!racerow) {
            return res.status(404).send({
                message: "RaceRow not found with id " + req.params.raceRowId
            });            
        }
        res.send(racerow);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "RaceRow not found with id " + req.params.raceRowId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving RaceRow with id " + req.params.raceRowId
        });
    });
};

// Update a note identified by the noteId in the request
exports.update = (req, res) => {
    // Find note and update it with the request body
    RaceRow.findOneAndUpdate(req.params.raceRowId, {
        race: req.body.race,
        driver: req.body.driver,
        car: req.body.car,
        position: req.body.position,
        startposition: req.body.startposition,
        incidents: req.body.incidents,
        points: req.body.points,
        infractionpoints: rec.body.infractionpoints,
        penaltypoints: rec.body.penaltypoints,
    }, {new: true})
    .then(racerow => {
        if(!racerow) {
            return res.status(404).send({
                message: "RaceRow not found with id " + req.params.raceRowId
            });
        }
        res.send(racerow);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "RaceRow not found with id " + req.params.raceRowId
            });                
        }
        return res.status(500).send({
            message: "Error updating RaceRow with id " + req.params.raceRowId
        });
    });
};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {
	RaceRow.findOneAndDelete(req.params.raceRowId)
    .then(racerow => {
        if(!racerow) {
            return res.status(404).send({
                message: "RaceRow not found with id " + req.params.raceRowId
            });
        }
        res.send({message: "RaceRow deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "RaceRow not found with id " + req.params.raceRowId
            });                
        }
        return res.status(500).send({
            message: "Could not delete RaceRow with id " + req.params.raceRowId
        });
    });
};