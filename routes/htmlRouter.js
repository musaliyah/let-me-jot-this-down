const express = require('express');
const router = express.Router();
const uuid = require('../helpers/uuid');
const path = require("path");

module.exports = function(app) {
router.get("/notes", function(req, res){
    res.sendFile(path.join(__dirname, "../public/notes.html"));

});

router.get("/*", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"));


});

}