var express = require("express");
var router = express.Router();
var db = require('../db');


router.put("/", (req, res) => {

    // update the database
    saveData(db, req.body)
    console.log(req.body)
});

async function listDatabases(db) {
    const databasesList = await db.client.db().admin().listDatabases();
    console.log(databasesList);
}

async function saveData(db, data) {
    try {
        const hakeeDatabase = db.client.db("HAKEE-database");
        await hakeeDatabase.collection("video-descriptions").insertOne(data);
    } catch(e) {
        console.error(e);
    }
}

module.exports = router;