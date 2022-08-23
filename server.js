const express = require('express');
const path = require('path');
const fs = require('fs');
const util = require('util');
const apiRouter = require('./routes/apiRouter');
const htmlRouter = require('./routes/htmlRouter');

const PORT = process.env.port || 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));


app.use('/api', apiRouter);
app.use('/', htmlRouter);

app.listen(PORT, () => 
    console.log(`App listening at http://localhost:${PORT} 🚀`)
);






