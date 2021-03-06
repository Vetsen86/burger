var connection = require("./connection.js");

var orm = {
    // selectWhere: function(tableInput, colToSearch, valOfCol) {
    //   var queryString = "SELECT * FROM ?? WHERE ?? = ?";
    //   connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
    //     if (err) throw err;
    //     console.log(result);
    //   });
    // },

    selectAll: function(cb) {
        connection.query("SELECT * FROM burgers", function(err, result) {
            if (err) throw err;

            for(i = 0; i < result.length; i++) {
                result[i].burger_name = result[i].burger_name.replace(/`/g, "");
            }

            cb(result);
        });
    },

    insertOne: function(burgerName, cb) {

        connection.query("INSERT INTO burgers (burger_name, devoured) VALUES (\"??\", false)",
            burgerName,
            function(err, result) {
                if (err) throw err;
                cb(result);
            }
        );
    },

    updateOne: function(burgerId, cb) {

        var queryString = "UPDATE burgers SET devoured = true WHERE id = " + burgerId;

        connection.query(queryString,
            function(err, result) {
                console.log(result);
                if (err) throw err;
                cb(result);
            }    
        );
    }

    // selectAndOrder: function(whatToSelect, table, orderCol) {
    //   var queryString = "SELECT ?? FROM ?? ORDER BY ?? DESC";
    //   console.log(queryString);
    //   connection.query(queryString, [whatToSelect, table, orderCol], function(err, result) {
    //     if (err) throw err;
    //     console.log(result);
    //   });
    // },

    // findWhoHasMost: function(tableOneCol, tableTwoForeignKey, tableOne, tableTwo) {
    //   var queryString =
    //     "SELECT ??, COUNT(??) AS count FROM ?? LEFT JOIN ?? ON ??.??= ??.id GROUP BY ?? ORDER BY count DESC LIMIT 1";
  
    //   connection.query(
    //     queryString,
    //     [tableOneCol, tableOneCol, tableOne, tableTwo, tableTwo, tableTwoForeignKey, tableOne, tableOneCol],
    //     function(err, result) {
    //       if (err) throw err;
    //       console.log(result);
    //     }
    //   );
    // }


  };
  
  module.exports = orm;