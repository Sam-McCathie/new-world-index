const express = require("express");
const app = express();
const port = 3001;
const mysql = require("mysql2");
const cors = require("cors");

require("dotenv").config();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: process.env.REACT_APP_USER,
  host: process.env.REACT_APP_HOST,
  password: process.env.REACT_APP_PASSWORD,
  database: process.env.REACT_APP_DATABASE,
});

app.post("/add-item", (req, res) => {
  console.log(req.body);
  const item = req.body.item;
  const value = req.body.value;
  const source = req.body.source;
  const status = req.body.status;
  const fromWhat = req.body.from;
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
        res.send("Item added");
      }
    }
  );
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
