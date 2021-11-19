import React, {useEffect, useState} from "react";
import Axios from "axios";

var moment = require("moment"); // require
moment().format();

const IndexItem = (props) => {
  const [editStatus, setEditStatus] = useState("default");

  const [updatedItem, setUpdatedItem] = useState("");
  const [updatedValue, setUpdatedValue] = useState();
  const [updatedSource, setUpdatedSource] = useState("");
  const [updatedStatus, setUpdatedStatus] = useState("");
  const [updatedFromWhat, setUpdatedFromWhat] = useState("");
  const [updatedUpdated, setUpdatedUpdated] = useState();

  // Bug with save route only changing when value is changed. All other routes will only work if value is changed first
  useEffect(() => {
    if (updatedValue !== undefined) {
      if (
        (updatedItem.length > 0 && editStatus === "edit") ||
        (updatedValue && editStatus === "edit") ||
        (updatedSource.length > 0 && editStatus === "edit") ||
        (updatedFromWhat.length > 0 && editStatus === "edit") ||
        (updatedStatus.length > 0 && editStatus === "edit")
      ) {
        setEditStatus("save");
        setUpdatedUpdated(moment().format("h:mm a - D MMM"));
      } else if (
        updatedItem.length === 0 &&
        !updatedValue &&
        updatedSource.length === 0 &&
        updatedFromWhat.length === 0 &&
        updatedStatus.length === 0 &&
        editStatus === "save"
      ) {
        setEditStatus("edit");
      }
    }
  }, [
    updatedItem,
    updatedValue,
    updatedSource,
    updatedFromWhat,
    updatedStatus,
  ]);

  const startEdit = () => {
    setEditStatus("edit");
  };

  const cancelEdit = () => {
    setEditStatus("default");
  };

  const saveEdit = (id) => {
    let sillyString = updatedValue;
    sillyString = parseFloat(sillyString).toFixed(2);
    let history = props.priceHistory;
    history.push({price: sillyString, date: updatedUpdated});

    Axios.put("http://localhost:3001/update", {
      item: updatedItem ? updatedItem : props.item,
      value: updatedValue ? updatedValue : props.value,
      source: updatedSource ? updatedSource : props.source,
      status: updatedStatus ? updatedStatus : props.status,
      fromWhat: updatedFromWhat ? updatedFromWhat : props.fromWhat,
      updated: updatedValue ? moment().format("h:mm a - D MMM") : props.updated,
      priceHistory: updatedValue ? history : props.priceHistory,
      id: id,
    }).then((response) => {
      window.location.reload();
    });
  };

  const deleteItem = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`);
    alert("Item deleted");
    props.setAllItems(
      props.allItems.filter((i) => {
        return i._id !== id;
      })
    );
  };

  const [momentVal, setMomentVal] = useState(props.updated);
  // const current = new Date();
  // let test = momentVal.diff(current, "days");

  // console.log(test);

  // console.log(current);

  // if (moment(momentVal).format("h:mm a - D MMM") !== "Invalid date") {

  //   console.log(momentConst);
  //   console.log(`New`);
  // } else {
  //   console.log("OLD");
  // }

  // Compare -> change colour based on days since

  return (
    <div className="item__index__sections" key={props.id}>
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
            saveEdit(props.id);
          }}
        >
          S
        </button>
      ) : null}
      <div
        className="item__index__data__hover"
        onClick={editStatus === "default" ? props.priceModalFunc : null}
      >
        <div className="item__index__item__data">
          {editStatus === "default" ? (
            props.item
          ) : (
            <input
              placeholder={props.item}
              className="item__index__input"
              type="text"
              value={updatedItem}
              onChange={function (e) {
                setUpdatedItem(e.target.value);
              }}
            />
          )}
        </div>
        <div className="item__index__value__data">
          {editStatus === "default" ? (
            props.value.toFixed(2)
          ) : (
            <input
              placeholder={props.value.toFixed(2)}
              className="item__index__input"
              type="number"
              value={updatedValue}
              onChange={function (e) {
                setUpdatedValue(parseFloat(e.target.value));
              }}
            />
          )}
        </div>

        <div className="item__index__profession__data">
          {editStatus === "default" ? (
            props.source
          ) : (
            <input
              placeholder={props.source}
              className="item__index__input"
              type="text"
              value={updatedSource}
              onChange={function (e) {
                setUpdatedSource(e.target.value);
              }}
            />
          )}
        </div>
        <div className="item__index__status__data">
          {editStatus === "default" ? (
            props.status
          ) : (
            <input
              placeholder={props.status}
              className="item__index__input"
              type="text"
              value={updatedStatus}
              onChange={function (e) {
                setUpdatedStatus(e.target.value);
              }}
            />
          )}
        </div>
        <div className="item__index__from__data">
          {editStatus === "default" ? (
            props.fromWhat
          ) : (
            <input
              placeholder={props.fromWhat}
              className="item__index__input"
              type="text"
              value={updatedFromWhat}
              onChange={function (e) {
                setUpdatedFromWhat(e.target.value);
              }}
            />
          )}
        </div>
        {/* <div className="item__index__updated__data">{momentVal}</div> */}
        <div className="item__index__updated__data">
          {moment(momentVal).format("h:mm a - D MMM") !== "Invalid date"
            ? moment(momentVal).format("h:mm a - D MMM")
            : momentVal}
        </div>
      </div>
      {editStatus === "default" ? (
        <button
          className="item__index__item__edit"
          onClick={() => {
            deleteItem(props.id);
            console.log(`Clicked remove - ${props.id}`);
          }}
        >
          D
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
            saveEdit(props.id);
          }}
        >
          S
        </button>
      ) : null}
    </div>
  );
};

export default IndexItem;
