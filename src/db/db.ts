require("dotenv").config();

const pgp = require("pg-promise")();

const db = pgp({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: 5432,
  database: process.env.DB_DATABASE,
  ssl: false,
});

module.exports = db;

// const Pool = require("pg").Pool;

// const pool = new Pool({
//   user: "postgres",
//   password: "123456",
//   host: "localhost",
//   port: 5432,
//   database: "perntodo",
// });

// module.export = pool;
