var express = require("express");
var router = express.Router();


var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.all(function(result) {
        var burgers = {
            burgers: result
        };
        res.render("index", burgers);
    });    
});

router.post("/api/addburger", function(req, res) {
    burger.add(req.body.burger_name, function(result) {
        res.json(result);
    });
});

router.put("/api/devour", function(req, res) {
    burger.update(req.body.burgerId, function(result) {
        res.json(result);
    });
});

module.exports = router;
