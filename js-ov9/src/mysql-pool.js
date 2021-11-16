import mysql from 'mysql';

// Setup MySQL-server connection pool
export let pool = mysql.createPool({
  host: 'mysql-ait.stud.idi.ntnu.no',
  user: 'felixalb', // Replace "username" with your username
  password: 'geNlUPxY', // Replace "password" with your password
  database: 'felixalb', // Replace "username" with your username
  connectionLimit: 1, // Reduce load on NTNU MySQL server
});
