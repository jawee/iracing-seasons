const Race = require('../../models/race.models.js');

// Create and Save a new Note
exports.create = (req, res) => {
	// Validate request
    if(!req.body.season) {
        return res.status(400).send({
            message: "Race must be attached to a season"
        });
    }

    if(!req.body.racenumber) {
        return res.status(400).send({
            message: "Race must have a race number"
        });
    }

    if(!req.body.track) {
        return res.status(400).send({
            message: "Race must have a track"
        });
    };

    // Create a Note
    const race = new Race({
    	name: req.body.season,
        raceNumber: req.body.raceNumber,
        track: req.body.String
    });

    // Save Note in the database
    race.save()
    .then(race => {
        res.send(race);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Race."
        });
    });
};

// Retrieve and return all notes from the database.
exports.findAll = (req, res) => {
	Race.find()
    .then(races => {
        res.send(races);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving races."
        });
    });
};

// Find a single note with a noteId
exports.findOne = (req, res) => {
	Race.findById(req.params.raceId)
    .then(driver => {
        if(!season) {
            return res.status(404).send({
                message: "Race not found with id " + req.params.raceId
            });            
        }
        res.send(season);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Race not found with id " + req.params.raceId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving season with id " + req.params.raceId
        });
    });
};

// Update a note identified by the noteId in the request
exports.update = (req, res) => {
	// Validate Request
    if(!req.body.season) {
        return res.status(400).send({
            message: "Race must be attached to a season"
        });
    }

    if(!req.body.racenumber) {
        return res.status(400).send({
            message: "Race must have a race number"
        });
    }

    if(!req.body.track) {
        return res.status(400).send({
            message: "Race must have a track"
        });
    };

    // Find note and update it with the request body
    Race.findOneAndUpdate(req.params.raceId, {
        name: req.body.season,
        raceNumber: req.body.raceNumber,
        track: req.body.String
    }, {new: true})
    .then(race => {
        if(!race) {
            return res.status(404).send({
                message: "Race not found with id " + req.params.raceId
            });
        }
        res.send(race);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Race not found with id " + req.params.raceId
            });                
        }
        return res.status(500).send({
            message: "Error updating race with id " + req.params.raceId
        });
    });
};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {
	Race.findOneAndDelete(req.params.raceId)
    .then(race => {
        if(!race) {
            return res.status(404).send({
                message: "Race not found with id " + req.params.raceId
            });
        }
        res.send({message: "Race deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Race not found with id " + req.params.raceId
            });                
        }
        return res.status(500).send({
            message: "Could not delete race with id " + req.params.raceId
        });
    });
};