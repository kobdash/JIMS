const mysql = require('mysql');

// Create a connection pool
const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',   
  user: 'root',   
  password: 'jeff13579',
  database: 'inventory' 
});

module.exports = pool;