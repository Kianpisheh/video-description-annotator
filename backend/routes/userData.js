var express = require("express");
var router = express.Router();


router.put("/", (req, res) => {

    // update the database

	console.log(req.body)
});

module.exports = router;