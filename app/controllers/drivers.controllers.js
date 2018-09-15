const Driver = require('../../models/driver.models.js');

// Create and Save a new Note
exports.create = (req, res) => {
	// Validate request
    if(!req.body.customerId) {
        return res.status(400).send({
            message: "Driver customerId can not be empty"
        });
    }

    if(!req.body.name) {
        return res.status(400).send({
            message: "Driver name can not be empty"
        });
    }

    if(!req.body.driverNumber) {
        return res.status(400).send({
            message: "Driver driverNumber can not be empty"
        });
    }

    // Create a Note
    const driver = new Driver({
    	customerId: req.body.customerId,
    	name: req.body.name,
    	driverNumber: req.body.driverNumber
    });

    // Save Note in the database
    driver.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Driver."
        });
    });
};

// Retrieve and return all notes from the database.
exports.findAll = (req, res) => {
	Driver.find()
    .then(drivers => {
        res.send(drivers);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving drivers."
        });
    });
};

// Find a single note with a noteId
exports.findOne = (req, res) => {
	Driver.findById(req.params.driverId)
    .then(driver => {
        if(!driver) {
            return res.status(404).send({
                message: "Driver not found with id " + req.params.driverId
            });            
        }
        res.send(driver);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Driver not found with id " + req.params.driverId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving driver with id " + req.params.driverId
        });
    });
};

exports.findByName = (req, res) => {
	Driver.findOne({ name: req.params.name }).then(driver => {
        if(!driver) {
            return res.status(404).send({
                message: "Driver not found with name " + req.params.name
            });            
        }
        res.send(driver);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Driver not found with name " + req.params.name
            });                
        }
        return res.status(500).send({
            message: "Error retrieving driver with name " + req.params.name
        });
    });
};

// Update a note identified by the noteId in the request
exports.update = (req, res) => {
	// Validate Request
    if(!req.body.customerId) {
        return res.status(400).send({
            message: "Driver customerId can not be empty"
        });
    }

    if(!req.body.name) {
        return res.status(400).send({
            message: "Driver name can not be empty"
        });
    }

    if(!req.body.driverNumber) {
        return res.status(400).send({
            message: "Driver driverNumber can not be empty"
        });
    }

    // Find note and update it with the request body
    Driver.findOneAndUpdate(req.params.driverId, {
        customerId: req.body.customerId,
    	name: req.body.name,
    	driverNumber: req.body.driverNumber
    }, {new: true})
    .then(driver => {
        if(!driver) {
            return res.status(404).send({
                message: "Driver not found with id " + req.params.driverId
            });
        }
        res.send(driver);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Driver not found with id " + req.params.driverId
            });                
        }
        return res.status(500).send({
            message: "Error updating driver with id " + req.params.driverId
        });
    });
};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {
	Driver.findOneAndDelete(req.params.driverId)
    .then(driver => {
        if(!driver) {
            return res.status(404).send({
                message: "Driver not found with id " + req.params.driverId
            });
        }
        res.send({message: "Driver deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Driver not found with id " + req.params.driverId
            });                
        }
        return res.status(500).send({
            message: "Could not delete driver with id " + req.params.driverId
        });
    });
};