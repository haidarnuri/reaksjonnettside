import express from "express";
import mysql from "mysql";

const app = express();

app.get("/", (req, res) => {
  res.json("Halla! Dette er backend");
});

//testing get data from db
app.get("/userinfo", (req, res) => {
  const q = "SELECT * FROM reactiondb.userinfo;";
  db.query(q, (err, data) => {
    if (err) {
      res.json(err);
    } else {
      res.json(data);
    }
  });
});

const PORT = 8800;
app.listen(PORT, () => {
  console.log(`Server is running on ` + PORT);
});

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "reactiondb",
});

//INSERT INTO `reactiondb`.`userinfo` (`id`, `username`, `password`) VALUES ('1', 'haidar', 'pass');
