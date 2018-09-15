module.exports = (app) => {
    const races = require('../controllers/races.controllers.js');

    // Create a new Note
    app.post('/races', races.create);

    // Retrieve all Notes
    app.get('/races', races.findAll);

    // Retrieve a single Note with noteId
    app.get('/races/:raceid', races.findOne);

    // Update a Note with noteId
    app.put('/races/:raceid', races.update);

    // Delete a Note with noteId
    app.delete('/races/:raceid', races.delete);
}