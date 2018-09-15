module.exports = (app) => {
    const seasons = require('../controllers/seasons.controllers.js');

    // Create a new Note
    app.post('/seasons', seasons.create);

    // Retrieve all Notes
    app.get('/seasons', seasons.findAll);

    // Retrieve a single Note with noteId
    app.get('/seasons/:seasonId', seasons.findOne);

    // Update a Note with noteId
    app.put('/seasons/:seasonId', seasons.update);

    // Delete a Note with noteId
    app.delete('/seasons/:seasonId', seasons.delete);
}