var express = require("express");
var router = express.Router();


router.post("/", (req, res) => {
	const clientEnteredPassword = req.body.password;
    if (clientEnteredPassword === "apple") {
        res.send({
            token: "test123"
        });
    }
});

module.exports = router;