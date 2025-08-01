require('dotenv').config(); // Importar dotenv

const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
});

connection.connect(err => {
  if (err) throw err;
  console.log('✅ Conectado a la base de datos MySQL (desde .env)');
});

module.exports = connection;
