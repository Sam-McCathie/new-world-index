import React from "react";

export const SmeltingItem = (props) => {
  return (
    <div className="smelting__layout">
      <div className="smelting__item__item">{props.item}</div>
      <div className="smelting__item__value">{props.value}</div>
      <div className="smelting__item__level">{props.level}</div>
    </div>
  );
};
