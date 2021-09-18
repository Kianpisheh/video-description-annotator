// var express = require("express");
// var router = express.Router();

// const {MongoClient} = require('mongodb');

// router.get("/", function(req, res, next) {

//     main().catch(console.error("something went wrong"));

//     res.send("API is working properly");
// });

// async function main() {
//     const uri = "mongodb+srv://kian:vphB8VtqYWbb4MFh@cluster0.ekorb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

//     const client = new MongoClient(uri);

//     try {
//         await client.connect();

//         await listDatabases(client);
//     } catch(e) {
//         console.error(e);
//     } finally {
//         await client.close();
//     }
// }

// async function listDatabases(client) {
//     const databasesList = await client.db().admin().listDatabases();
//     console.log(databasesList);
// }

// module.exports = router;