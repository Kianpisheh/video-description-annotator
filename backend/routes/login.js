var express = require("express");
var router = express.Router();


router.post("/", (req, res) => {
	const clientEnteredPassword = req.body.password;
	console.log(req.body.password)
    if (clientEnteredPassword === "12345") {
        res.send({
            token: "test123",
        });
    }
});

module.exports = router;