const fs = require("fs");
const path = require('path');

//Referenced: https://expressjs.com/en/guide/routing.html
//            https://nodejs.org/api/path.html


module.exports = (app) => {
      // use of GET method route for a specific route parameter (in this can /notes)
    app.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    });
      // use of GET method route for a specific route parameter (in this case /request)
    app.get('/request', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));

    })

};

