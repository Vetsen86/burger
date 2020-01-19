var orm = require("../config/orm.js");

var burger = {
    add: function(burgerName, cb) {
        orm.insertOne(burgerName, function(res) {
            cb(res);
        });
    },

    all: function(cb) {
        orm.selectAll(function(res) {
            cb(res);
        });
    },

    update: function(burgerId, cb) {
        orm.updateOne(burgerId, function(res) {
            cb(res);
        });
    }
};

module.exports = burger;
