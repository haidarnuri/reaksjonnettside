import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

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

app.post("/createuser", (req, res) => {
  const user = req.body.user;
  const pass = req.body.pass;

  db.query(
    "INSERT INTO `reactiondb`.`userinfo` (`username`, `password`) VALUES (?,?);",
    [user, pass],
    (err, res) => {
      if (err) {
        console.log(err);
      } else {
        console.log("success");
      }
    }
  );
});
