var express = require("express");
var router = express.Router();
const {MongoClient} = require('mongodb');


class db {
    constructor() {
        this.uri = process.env.MONGODB_URI;
        this.client = new MongoClient(this.uri);

    }

    async connect() {
        try {
            await this.client.connect();
            console.log("connected to the database");
        } catch(e) {
            console.error(e);
        }
    }

}

module.exports = new db();


// module.exports = {
//     connect: () => {
//         const uri = 
//         try {
//             await client.connect();
    
//             await listDatabases(client);
//         } catch(e) {
//             console.error(e);
//         } finally {
//             await client.close();
//         }
//     }
// }

// const {MongoClient} = require('mongodb');

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