import React, {useState} from "react";
import "../styles/item-index.scss";
import {item} from "../data/items";

var moment = require("moment"); // require
moment().format();

export const ItemIndex = () => {
  // New item
  const [newDropdown, setNewDropdown] = useState(false);
  const [newItem, setNewItem] = useState();
  const [newValue, setNewValue] = useState();
  const [newProfession, setNewProfession] = useState();
  const [newStatus, setNewStatus] = useState();
  const [newFrom, setNewFrom] = useState();
  const [newUpdated, setNewUpdated] = useState(); // potential issue for different timezones

  const SaveNewItem = () => {
    setNewDropdown(false);
    item.push({
      item: newItem,
      value: newValue,
      profession: newProfession,
      status: newStatus,
      from: newFrom,
      updated: newUpdated,
      priceHistory: {price: newValue, date: newUpdated},
    });
    setNewDropdown();
    setNewItem();
    setNewValue();
    setNewProfession();
    setNewStatus();
    setNewFrom();
    setNewUpdated();
    console.log(item);
  };

  /** To do,
   * 1. Add dropdown to profession &  status
   * 2. Add condition to save button -> if all fields aren't complete do not submit -> else popup telling user what to do.
   * 3. Add editting functionality.
   * 4. Connect to database.
   */

  return (
    <div>
      <h1>403's New World Index</h1>
      <h3>Item Index</h3>
      <div className="item__index">
        <div className="item__index__sections">
          {!newDropdown ? (
            <button
              className="item__index__item__add"
              onClick={() => {
                setNewDropdown(true);
              }}
            >
              +
            </button>
          ) : null}
          {newDropdown ? (
            <button
              className="item__index__item__add__close"
              onClick={() => {
                setNewDropdown(false);
              }}
            >
              X
            </button>
          ) : null}
          <div className="item__index__item__heading">Item</div>
          <div className="item__index__value__heading">Value</div>
          <div className="item__index__profession__heading">Profession</div>
          <div className="item__index__status__heading">Status</div>
          <div className="item__index__from__heading">From</div>
          <div className="item__index__updated__heading">Updated</div>
        </div>
        {/* Add item */}
        {newDropdown ? (
          <div className="item__index__sections">
            <button className="item__index__item__save" onClick={SaveNewItem}>
              S
            </button>
            <div className="item__index__item__data">
              <input
                placeholder="Item Name"
                className="item__index__input"
                type="text"
                value={newItem}
                onChange={function (e) {
                  setNewItem(e.target.value);
                  setNewUpdated(moment().format("h:mm a - D MMM"));
                }}
              />
            </div>
            <div className="item__index__value__data">
              <input
                placeholder="0.01"
                className="item__index__input"
                type="number"
                value={newValue}
                onChange={function (e) {
                  setNewValue(e.target.value);
                }}
              />
            </div>
            <div className="item__index__profession__data">
              <input
                placeholder="Profession"
                className="item__index__input"
                type="text"
                value={newProfession}
                onChange={function (e) {
                  setNewProfession(e.target.value);
                }}
              />
            </div>
            <div className="item__index__status__data">
              <input
                placeholder="Raw/Refined"
                className="item__index__input"
                type="text"
                value={newStatus}
                onChange={function (e) {
                  setNewStatus(e.target.value);
                }}
              />
            </div>
            <div className="item__index__from__data">
              <input
                placeholder="Source"
                className="item__index__input"
                type="text"
                value={newFrom}
                onChange={function (e) {
                  setNewFrom(e.target.value);
                }}
              />
            </div>
            <div className="item__index__updated__data">
              <input
                disabled
                placeholder="This will auto complete"
                className="item__index__input"
                type="text"
                name="fname"
              />
            </div>
          </div>
        ) : null}
        {/* Map the below -> each item will need its own state so it can be changed dynamically*/}
        {item.map((item) => {
          return (
            <div className="item__index__sections" key={item.item}>
              <button className="item__index__item__edit">E</button>
              <div className="item__index__item__data">{item.item}</div>
              <div className="item__index__value__data">{item.value}</div>
              <div className="item__index__profession__data">
                {item.profession}
              </div>
              <div className="item__index__status__data">{item.status}</div>
              <div className="item__index__from__data">{item.from}</div>
              <div className="item__index__updated__data">{item.updated}</div>
            </div>
          );
        })}
        <div className="item__index__column__close"></div>
      </div>
    </div>
  );
};
