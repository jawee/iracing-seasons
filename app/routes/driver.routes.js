module.exports = (app) => {
    const drivers = require('../controllers/drivers.controllers.js');

    // Create a new Note
    app.post('/drivers', drivers.create);

    // Retrieve all Notes
    app.get('/drivers', drivers.findAll);

    // Retrieve a single Note with noteId
    app.get('/drivers/:driverId', drivers.findOne);

    app.get('/drivers/findbyname/:name', drivers.findByName)

    // Update a Note with noteId
    app.put('/drivers/:driverId', drivers.update);

    // Delete a Note with noteId
    app.delete('/drivers/:driverId', drivers.delete);
}