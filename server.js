//Imports dependencies
const express = require('express');
const fs = require("fs");
const app = express();

// environment variable PORT
const PORT = process.env.PORT || 3001;
// https://expressjs.com/en/starter/static-files.html
//serves the static files from the public directory
 app.use(express.static('public'));
//  middleware needed for post request (url encoded specifically recognizes data as strings or arrays)
 app.use(express.urlencoded({ extended:true }));
 app.use(express.json());
 //pulls from router files
 require('./routes/apiRouter')(app);
 require('./routes/htmlRouter')(app);

// Listens to specific host (in this case localhost:3001)
app.listen(PORT, () => 
    console.log(`App listening at http://localhost:${PORT} 🚀`)
);






