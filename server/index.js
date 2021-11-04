const express = require("express");
const app = express();
const PORT = 3001;
const mongoose = require("mongoose");
const ItemModel = require("./models/Item-Index");
const cors = require("cors");

require("dotenv").config();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.REACT_APP_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.post("/add-item", async (req, res) => {
  const item = req.body;
  const newItem = new ItemModel(item);
  await newItem.save();

  res.json(item);
});

app.get("/all-items", async (req, res) => {
  ItemModel.find({}, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
      console.log("completed");
    }
  });
});

app.put("/update", async (req, res) => {
  const id = req.body.id;
  const item = req.body.item;
  const value = req.body.value;
  const source = req.body.source;
  const status = req.body.status;
  const fromWhat = req.body.fromWhat;
  const updated = req.body.updated;
  const priceHistory = req.body.priceHistory;

  try {
    await ItemModel.findById(id, (err, updatedItem) => {
      updatedItem.item = item;
      updatedItem.value = value;
      updatedItem.source = source;
      updatedItem.status = status;
      updatedItem.fromWhat = fromWhat;
      updatedItem.updated = updated;
      updatedItem.priceHistory = priceHistory;
      updatedItem.save();
      res.send("updated");
    })
      .clone()
      .catch(function (err) {
        console.log(err);
      });
  } catch (err) {
    console.log(err);
  }
});

app.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  await ItemModel.findByIdAndRemove({_id: id}, (req, res, err) => {
    if (!err) {
      console.log("Item deleted");
    } else {
      console.log(err);
    }
  })
    .clone()
    .catch(function (err) {
      console.log(err);
    });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
