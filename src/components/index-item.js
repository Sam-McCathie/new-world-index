import React, {useEffect, useState} from "react";
import Axios from "axios";

const IndexItem = (props) => {
  const [editStatus, setEditStatus] = useState("default");

  // Complete setting up below and replace strings from put request
  const [updatedItem, setUpdatedItem] = useState();
  const [updatedValue, setUpdatedValue] = useState();
  const [updatedSource, setUpdatedSource] = useState();
  const [updatedStatus, setUpdatedStatus] = useState();
  const [updatedFromWhat, setUpdatedFromWhat] = useState();
  const [updatedUpdated, setUpdatedUpdated] = useState(); // date
  const [updatedPriceHistroy, setUpdatedPriceHistory] = useState();
  // Make sure new price is pushed to old pricec history JSON

  useEffect(() => {
    if (updatedValue && editStatus === "edit") {
      setEditStatus("save");
      console.log("new price");
    } else if (!updatedValue && editStatus === "save") {
      setEditStatus("edit");
      console.log("no price");
    }
  }, [updatedValue]);

  const startEdit = () => {
    setEditStatus("edit");
  };

  const cancelEdit = () => {
    setEditStatus("default");
  };

  const saveEdit = (itemid) => {
    // setEditStatus("default");
    // setUpdatedValue();
    console.log("price edited");
    Axios.put("http://localhost:3001/update", {
      item: "huh",
      value: updatedValue,
      source: "test",
      status: "test",
      fromWhat: "test",
      updated: "test",
      priceHistory: JSON.stringify({hmmm: "test", daaa: "test"}),
      itemid: itemid,
    }).then((response) => {
      alert("updated");
      console.log(response);
      // setAllItems(response.data);
      // console.log(response);
      // console.log(allItems);
    });
  };

  return (
    <div className="item__index__sections" key={props.item}>
      {editStatus === "default" ? (
        <button className="item__index__item__edit" onClick={startEdit}>
          E
        </button>
      ) : null}
      {editStatus === "edit" ? (
        <button className="item__index__item__edit" onClick={cancelEdit}>
          X
        </button>
      ) : null}
      {editStatus === "save" ? (
        <button
          className="item__index__item__edit"
          onClick={() => {
            saveEdit(props.itemid);
          }}
        >
          S
        </button>
      ) : null}
      <div className="item__index__item__data">{props.item}</div>

      <div className="item__index__value__data">
        {editStatus === "default" ? (
          props.value
        ) : (
          <input
            placeholder={props.value}
            className="item__index__input"
            type="number"
            value={updatedValue}
            onChange={function (e) {
              setUpdatedValue(e.target.value);
            }}
          />
        )}
      </div>

      <div className="item__index__profession__data">{props.source}</div>
      <div className="item__index__status__data">{props.status}</div>
      <div className="item__index__from__data">{props.fromWhat}</div>
      <div className="item__index__updated__data">{props.updated}</div>
    </div>
  );
};

export default IndexItem;
