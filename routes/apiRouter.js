const fs = require("fs");

var data = require("../Develop/db/db.json")

module.exports = function(app) { 
    app.get("/api/notes", function(req, res) {
        res.json(data);
    });

    app.get("api/notes/:id", function(req, res) {
        res.json(data[Number(req.paramas.id)]);
    });

    app.post("/api/notes", function(req, res){
        var newNote = req.body;
        var newId = (data.length).toString();
        console.log(id);
        newNote.id = newId;
        data.push(newNote);

        fs.writeFile("./db/db.json", JSON.stringify(data), function(err) {
            if(err)
            throw (err);
        });
        res.json(data);
    });

    app.delete("/api/notes:id", function(req, res) {
        var noteId = req.params.id;
        var diffId = 0;
        console.log(`Deleted note id #: ${noteId} `);
        data = data.filter(developNote => {
            return developNote.id !=noteId;
        });
        for (developNote of data){ 
            developNote.id = diffId.toString();
            newId++;
        }
        fs.writeFile("./db/db.json", JSON.stringify(data));
        res.json(data);
    });


}
