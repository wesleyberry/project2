var mysql = require("mysql");
var connection;

// eslint-disable-next-line no-undef
if (process.env.JAWSDB_URL) {
    // eslint-disable-next-line no-undef
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "aceofspades!1",
        database: "project2"
    });
// eslint-disable-next-line no-extra-semi
};

connection.connect();
module.exports = connection;