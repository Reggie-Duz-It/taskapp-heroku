const mysql = require('mysql2');
const conn = mysql.createPool({
    host: 'us-cdbr-east-05.cleardb.net',
    user: 'b01e113f065038',
    password: 'fbe14a28',
    database: 'heroku_495357b72511a96'
});

/*
conn.connect(function(err) {
    if (err) throw err;
    console.log('Database is connected successfully!');
});
*/

module.exports = conn;


/*
const mysql = require('mysql2');
const conn = mysql.createConnection({
    host: 'us-cdbr-east-05.cleardb.net',
    user: 'b01e113f065038',
    password: 'fbe14a28',
    database: 'heroku_495357b72511a96'
});

conn.connect(function(err) {
    if (err) throw err;
    console.log('Database is connected successfully!');
});


module.exports = conn;
*/