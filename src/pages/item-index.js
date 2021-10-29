import React, {useState, useEffect} from "react";
import "../styles/item-index.scss";
import Axios from "axios";
import IndexItem from "../components/index-item";

import {item} from "../data/items";

var moment = require("moment"); // require
moment().format();

export const ItemIndex = () => {
  // New item
  const [newDropdown, setNewDropdown] = useState(false);
  const [newItem, setNewItem] = useState();
  const [newValue, setNewValue] = useState();
  const [newSource, setNewSource] = useState();
  const [newStatus, setNewStatus] = useState();
  const [newFrom, setNewFrom] = useState();
  const [newUpdated, setNewUpdated] = useState();

  const [allItems, setAllItems] = useState();

  const addItem = () => {
    setNewDropdown(false);
    Axios.post("http://localhost:3001/add-item", {
      item: newItem,
      value: newValue,
      source: newSource,
      status: newStatus,
      from: newFrom,
      updated: newUpdated,
      priceHistory: JSON.stringify({price: newValue, date: newUpdated}),
    }).then(() => {
      setNewItem();
      setNewValue();
      setNewSource();
      setNewStatus();
      setNewFrom();
      setNewUpdated();
      getAllItems();
    });
  };

  const getAllItems = () => {
    Axios.get("http://localhost:3001/all-items").then((response) => {
      setAllItems(response.data);
      console.log(response);
      console.log(allItems);
    });
  };

  useEffect(() => {
    getAllItems();
  }, []);

  // const SaveNewItem = () => {
  //   setNewDropdown(false);
  //   item.push({
  //     item: newItem,
  //     value: newValue,
  //     source: newSource,
  //     status: newStatus,
  //     from: newFrom,
  //     updated: newUpdated,
  //     priceHistory: {price: newValue, date: newUpdated},
  //   });
  //   setNewDropdown();
  //   setNewItem();
  //   setNewValue();
  //   setNewSource();
  //   setNewStatus();
  //   setNewFrom();
  //   setNewUpdated();
  //   console.log(item);
  // };

  /** To do,
   * 1. Add dropdown to profession & status (done)
   * 2. Re-name trade skill/ profession to source to include drops, crafted and other
   * 3. Add condition to save button -> if all fields aren't complete do not submit -> else popup telling user what to do.
   * 4. Add editting functionality to existing entries.
   * 5. Connect to database.
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
          <div className="item__index__profession__heading">Source</div>
          <div className="item__index__status__heading">Status</div>
          <div className="item__index__from__heading">From</div>
          <div className="item__index__updated__heading">Updated</div>
        </div>
        {/* Add item */}
        {newDropdown ? (
          <div className="item__index__sections">
            <button className="item__index__item__save" onClick={addItem}>
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
              <select
                className="item__index__select"
                onChange={function (e) {
                  setNewSource(e.target.value);
                }}
              >
                <option value={undefined}>select*</option>
                <option value="Drop">Drop</option>
                <option value="Logging">Logging</option>
                <option value="Mining">Mining</option>
                <option value="Fishing">Fishing</option>
                <option value="Harvesting">Harvesting</option>
                <option value="Tracking & Skinning">Tracking & Skinning</option>
                <option value="Smelthing">Smelthing</option>
                <option value="Woodworking">Woodworking</option>
                <option value="Leatherworking">Leatherworking</option>
                <option value="Weaving">Weaving</option>
                <option value="Stonecutting">Stonecutting</option>
                <option value="Stonecutting">Other</option>
              </select>
            </div>
            <div className="item__index__status__data">
              <select
                className="item__index__select"
                onChange={function (e) {
                  setNewStatus(e.target.value);
                }}
              >
                <option value={undefined}>select*</option>
                <option value="Raw">Raw</option>
                <option value="Refined">Refined</option>
                <option value="Crafted">Crafted</option>
                <option value="Looted">Looted</option>
              </select>
            </div>
            <div className="item__index__from__data">
              <input
                placeholder="Collected From"
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
        {allItems !== undefined
          ? allItems.map((item) => {
              return (
                <IndexItem
                  key={item.item}
                  item={item.item}
                  value={item.value}
                  source={item.source}
                  status={item.status}
                  fromWhat={item.fromWhat}
                  updated={item.updated}
                />
              );
            })
          : null}
        <div className="item__index__column__close"></div>
      </div>
    </div>
  );
};
