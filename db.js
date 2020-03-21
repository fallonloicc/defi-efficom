var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    port:"8889",
    user: "root",
    password: "root",
    database:"défi"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

module.exports = con;
