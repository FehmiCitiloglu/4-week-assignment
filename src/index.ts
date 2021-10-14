import express from "express";
// import bodyParser from "body-parser";
const app = express();
const port = 3001;

app.use(express.json());
var pgp = require("pg-promise")();
// var db = pgp("postgres://cccfehmi.fc2@gmail.com:123456@localhost:5432/twitter");

var db = pgp({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: 5432,
  database: process.env.DB_DATABASE,
  ssl: {
    rejectUnauthorized: false,
  },
});
app.get("/", (req: any, res: any) => {
  db.one("SELECT * FROM users")
    .then(function (data: any) {
      res.send(data);
      console.log("DATA:", data.value);
    })
    .catch(function (error: any) {
      console.log("ERROR:", error);
    });

  // const tweet = {
  //   id: 1,
  //   tweet_content: "bla bla bla bla bla",
  // };
  // res.send(tweet);
});

app.post("/", (req: any, res: any) => {
  console.log(req.body);

  res.send(req.body);
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
