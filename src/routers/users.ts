// // import express from "express";
// // const dotenv = require("dotenv").config();
// import pgPromise from "pg-promise";
// // const router = express.Router();
// // const app = express();
// const pgp = pgPromise({});

// var db = pgp({
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   host: process.env.DB_HOST,
//   port: 5432,
//   database: process.env.DB_DATABASE,
//   ssl: {
//     rejectUnauthorized: false,
//   },
// });
const express = require("express");
const myDb = require("../db/db");

const router = express.Router();

router
  .route("/users")
  .all((req: any, res: any, next: any) => {
    console.log("Request detected");
    next();

    //res.send("It works. Try different route");
  })
  .get((req: any, res: any) => {
    myDb
      .query("SELECT id, username FROM users")
      .then((data: any) => {
        res.send(data);
      })
      .catch(function (error: any) {
        res.send(error);
      });
  });
router
  .route("/:id")
  .get((req: any, res: any) => {
    db.one('SELECT id, surname FROM "users" WHERE id=$1', [req.params.id])
      .then((data: any) => {
        res.send(data);
      })
      .catch((error: any) => {
        res.sendStatus(404);
      });
  })
  .delete((req: any, res: any) => {
    db.query('DELETE FROM "users" WHERE id=$1', [req.params.id])
      .then((data: any) => {
        res.send(data);
      })
      .catch((error: any) => {
        res.sendStatus(404);
      });
  })
  .put((req: any, res: any) => {
    console.log(req.body);
    db.query('UPDATE "users" SET surname=$2 WHERE id=$3', [
      req.body.surname,
      req.params.id,
    ])
      .then((data: any) => {
        res.send(data);
      })
      .catch((error: any) => {
        res.sendStatus(404);
      });
  });
module.exports = router;
