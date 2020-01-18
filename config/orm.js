var connection = require("./connection.js");

var orm = {
    selectWhere: function(tableInput, colToSearch, valOfCol) {
      var queryString = "SELECT * FROM ?? WHERE ?? = ?";
      connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
        if (err) throw err;
        console.log(result);
      });
    },

    selectAll: function(cb) {
        connection.query("SELECT * FROM burgers", function(err, result) {
            if (err) throw err;
            console.log(result);
            cb(result);
        });
    },

    insertOne: function(burger_name, devoured, cb) {
        connection.query("INSERT INTO burgers (burger_name, devoured) VALUES (??, ??)",
            [burger_name, devoured],
            function(err, result) {
                if (err) throw err;
                console.log(result);
                cb(result);
            }
        );
    },

    updateOne: function() {
        connection.query();
    },

    selectAndOrder: function(whatToSelect, table, orderCol) {
      var queryString = "SELECT ?? FROM ?? ORDER BY ?? DESC";
      console.log(queryString);
      connection.query(queryString, [whatToSelect, table, orderCol], function(err, result) {
        if (err) throw err;
        console.log(result);
      });
    },

    findWhoHasMost: function(tableOneCol, tableTwoForeignKey, tableOne, tableTwo) {
      var queryString =
        "SELECT ??, COUNT(??) AS count FROM ?? LEFT JOIN ?? ON ??.??= ??.id GROUP BY ?? ORDER BY count DESC LIMIT 1";
  
      connection.query(
        queryString,
        [tableOneCol, tableOneCol, tableOne, tableTwo, tableTwo, tableTwoForeignKey, tableOne, tableOneCol],
        function(err, result) {
          if (err) throw err;
          console.log(result);
        }
      );
    }


  };
  
  module.exports = orm;