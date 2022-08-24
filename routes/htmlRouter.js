const path = require('path');

//Referenced: https://expressjs.com/en/guide/routing.html
//            https://nodejs.org/api/path.html


module.exports = (app) => {

    app.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, './public/notes.html'));
    })

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, './public/index.html'));

    })

};

