var express = require("express");
var router = express.Router();


var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    res.render("index");
});

router.post("/api/addburger", function(req, res) {
    burger.add(req.body.burger_name, function(result) {
        console.log(result);
    });
});

module.exports = router;
