const fs = require("fs");
const path = require('path');
// db.json file has an empty array for user input to be stored in!
var data = require("../db/db.json")
var uniqueId = require('uniqid');

// Referenced: https://expressjs.com/en/guide/routing.html
//             https://nodejs.org/api/path.html
//             https://www.npmjs.com/package/uniqid to npm install uniqid 


module.exports = (app) => { 
    // use of GET method route for a specific route parameter (in this can /api/notes) to request data from the db.son file. 
    app.get('/api/notes', (req, res) =>{ 
        res.sendFile(path.join(__dirname, '../db/db.json'));
    });
    // use of POST method route to to recieve data stored in the db.json file to a specific route parameter (in this case the /api/notes).
    app.post('/api/notes', (req, res) => {
        let db = fs.readFileSync('./db/db.json');
        db = JSON.parse(db);
        res.json(db);
        //Parameters of the post request will recieve. For this post request, user's will input information into the note app (title, and text) and generates a unique id for the collected data. 
        let note = {
            id: uniqueId(),
            title: req.body.title, 
            text: req.body.text
        };
        //logs user input into terminal 
        console.log(note);
        //pushes note data into db.json file, and makes information a string regardless 
        db.push(note);
        fs.writeFileSync('./db/db.json', JSON.stringify(db));
        res.json(db);
    });
    //deletes user's data upon request by referencing the id in the db.json file
    app.delete('/api/notes/:id', (req, res)=> {
        let db = JSON.parse(fs.readFileSync('./db/db.json'))
        let deleteNote = db.filter(item => item.id !== req.params.id);
        fs.writeFileSync('./db/db.json', JSON.stringify(deleteNote));
        res.json(deleteNote);
    })


};

// https://stackoverflow.com/questions/7591240/what-does-dot-slash-refer-to-in-terms-of-an-html-file-path-location

//Had difficulty discerning between ./ vs. .// and used the aid of a askBCS tutor (Royce) and stackoverflow discussion post above 