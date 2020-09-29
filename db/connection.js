

const mysql = require('mysql2');
require('dotenv').config();

const connection = mysql.createConnection({
    host: 'localhost',
    user: DB_USER,
    password: DB_PW,
    database: DB_NAME
});

connection.connect(function (err) {
    if (err) throw err;
});

module.exports = connection;