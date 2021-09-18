var express = require("express");
var router = express.Router();
var db = require('../db');


router.post("/", (req, res) => {

    // update the database
    saveData(db, req.body)
    console.log(req.body)
    res.send();
});

async function saveData(db, data) {
    try {
        const hakeeDatabase = db.client.db("HAKEE-database");
        await hakeeDatabase.collection("video-descriptions").insertOne(data);
    } catch(e) {
        console.error(e);
    }
}

module.exports = router;