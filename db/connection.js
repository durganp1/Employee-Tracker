

const mysql = require('mysql2');


const connection = mysql.createConnection({
    host: 'localhost',
    // YOUR USER NAME
    user: '',
    // YOUR PASSWORD
    password: '',
    database: 'employees'
});

connection.connect(function (err) {
    if (err) throw err;
});

module.exports = connection;