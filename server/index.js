const express = require("express");
const app = express();
const PORT = 3001;
const mysql = require("mysql2");
const cors = require("cors");

require("dotenv").config();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: process.env.REACT_APP_USER_LOCAL,
  host: process.env.REACT_APP_HOST_LOCAL,
  password: process.env.REACT_APP_PASSWORD_LOCAL,
  database: process.env.REACT_APP_DATABASE_LOCAL,

  // user: process.env.REACT_APP_USER,
  // host: process.env.REACT_APP_HOST,
  // password: process.env.REACT_APP_PASSWORD,
  // database: process.env.REACT_APP_DATABASE,
});

app.post("/add-item", (req, res) => {
  console.log(req.body);
  const item = req.body.item;
  const value = req.body.value;
  const source = req.body.source;
  const status = req.body.status;
  const fromWhat = req.body.fromWhat;
  const updated = req.body.updated;
  const priceHistory = req.body.priceHistory;

  db.query(
    // "INSERT INTO item_index (item, value, source, status, fromWhat, updated) VALUES (?,?,?,?,?,?)",
    "INSERT INTO item_index (item, value, source, status, fromWhat, updated, priceHistory) VALUES (?,?,?,?,?,?,?)",
    [item, value, source, status, fromWhat, updated, priceHistory],
    // [item, value, source, status, fromWhat, updated],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.get("/all-items", (req, res) => {
  db.query("SELECT * FROM item_index", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.put("/update", (req, res) => {
  const itemid = req.body.itemid;
  const item = req.body.item;
  const value = req.body.value;
  const source = req.body.source;
  const status = req.body.status;
  const fromWhat = req.body.fromWhat;
  const updated = req.body.updated;
  const priceHistory = req.body.priceHistory;

  db.query(
    "UPDATE item_index SET item = ?, value = ?, source = ?,status = ?, fromWhat = ?, updated = ?, priceHistory = ? WHERE itemid = ?",
    [item, value, source, status, fromWhat, updated, priceHistory, itemid],

    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.delete("/delete/:itemid", (req, res) => {
  const itemid = req.params.itemid;
  db.query("DELETE FROM item_index WHERE itemid = ?", itemid, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
