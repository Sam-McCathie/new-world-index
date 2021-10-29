import React, {useEffect, useState} from "react";

const IndexItem = (props) => {
  const [editStatus, setEditStatus] = useState("default");
  const [newPrice, setNewPrice] = useState();

  console.log(newPrice);

  useEffect(() => {
    if (newPrice && editStatus === "edit") {
      setEditStatus("save");
      console.log("new price");
    } else if (!newPrice && editStatus === "save") {
      setEditStatus("edit");
      console.log("no price");
    }
  }, [newPrice]);

  const startEdit = () => {
    setEditStatus("edit");
  };

  const cancelEdit = () => {
    setEditStatus("default");
  };

  const saveEdit = () => {
    setEditStatus("default");
    setNewPrice();
    console.log("price edited");
  };

  console.log(editStatus);
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
        <button className="item__index__item__edit" onClick={saveEdit}>
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
            value={newPrice}
            onChange={function (e) {
              setNewPrice(e.target.value);
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
