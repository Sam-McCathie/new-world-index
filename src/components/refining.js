import React from "react";
import "../styles/refining.scss";

export const Refining = (props) => {
  return (
    <div className="refining__item">
      <div className="refining__item__item">{props.item}</div>
      <div className="refining__item__cost">{props.cost}</div>
      <div className="refining__item__xp">{props.xp}</div>
    </div>
  );
};
