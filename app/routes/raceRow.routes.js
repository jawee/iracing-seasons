module.exports = (app) => {
    const racerows = require('../controllers/raceRows.controllers.js');

    // Create a new Note
    app.post('/racerows', racerows.create);

    // Retrieve all Notes
    app.get('/racerows', racerows.findAll);

    // Retrieve a single Note with noteId
    app.get('/racerows/:racerowid', racerows.findOne);

    // Update a Note with noteId
    app.put('/racerows/:racerowid', racerows.update);

    // Delete a Note with noteId
    app.delete('/racerows/:racerowid', racerows.delete);
}