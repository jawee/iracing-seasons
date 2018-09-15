const Season = require('../../models/season.models.js');

// Create and Save a new Note
exports.create = (req, res) => {
	// Validate request
    if(!req.body.name) {
        return res.status(400).send({
            message: "Season must have a name"
        });
    }

    // Create a Note
    const season = new Season({
    	name: req.body.name,
    });

    // Save Note in the database
    season.save()
    .then(season => {
        res.send(season);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Season."
        });
    });
};

// Retrieve and return all notes from the database.
exports.findAll = (req, res) => {
	Season.find()
    .then(seasons => {
        res.send(seasons);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving seasons."
        });
    });
};

// Find a single note with a noteId
exports.findOne = (req, res) => {
	Season.findById(req.params.seasonId)
    .then(driver => {
        if(!season) {
            return res.status(404).send({
                message: "Season not found with id " + req.params.seasonId
            });            
        }
        res.send(season);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Season not found with id " + req.params.seasonId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving season with id " + req.params.seasonId
        });
    });
};

// Update a note identified by the noteId in the request
exports.update = (req, res) => {
	// Validate Request
    if(!req.body.name) {
        return res.status(400).send({
            message: "Season name can not be empty"
        });
    }

    // Find note and update it with the request body
    Season.findOneAndUpdate(req.params.seasonId, {
        customerId: req.body.customerId,
    	races: req.body.races,
    }, {new: true})
    .then(season => {
        if(!season) {
            return res.status(404).send({
                message: "Season not found with id " + req.params.seasonId
            });
        }
        res.send(season);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Season not found with id " + req.params.seasonId
            });                
        }
        return res.status(500).send({
            message: "Error updating season with id " + req.params.seasonId
        });
    });
};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {
	Season.findOneAndDelete(req.params.seasonId)
    .then(season => {
        if(!season) {
            return res.status(404).send({
                message: "Season not found with id " + req.params.seasonId
            });
        }
        res.send({message: "Season deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Season not found with id " + req.params.seasonId
            });                
        }
        return res.status(500).send({
            message: "Could not delete season with id " + req.params.seasonId
        });
    });
};