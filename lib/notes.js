const fs = require('fs');
const path = require('path');

function createNewNote(body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFielSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({notesArray}, null, 2)
    );
    return note;
}

function validateNote(note) {
    if (!note.title || typeof note.title !== 'string') {
        return false;
    }
    if (!note.text || typeof note.text !== 'string') {
        return false;
    }
    return true;
}

function findById (id, notesArray) {
    const result = notesArray.filter( note => note.id === id)[0];
    return result;
}

module.exports = {
    createNewNote,
    findById,
    validateNote
};