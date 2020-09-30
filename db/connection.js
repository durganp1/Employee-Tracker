

const mysql = require('mysql2');


const connection = mysql.createConnection({
    host: 'localhost',
    // YOUR USER NAME
    user: 'root',
    // YOUR PASSWORD
    password: '2oRiley!2',
    database: 'employees'
});

connection.connect(function (err) {
    if (err) throw err;
});

module.exports = connection;