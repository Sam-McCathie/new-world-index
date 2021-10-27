import React from "react";
import {Link} from "react-router-dom";
import "../styles/index.scss";

export const index = () => {
  return (
    <div>
      <h1>403's New World Index</h1>
      <div className="index__nav__buttoms">
        <div>
          <Link to="/item-index">
            <button>Item Index</button>
          </Link>
          <button>Inventory Estimate</button>
        </div>
        <div>
          <button>Refining Calculator</button>
          <button>Crafting Calculator</button>
        </div>
        <div>
          <Link to="/price-history">
            <button>TEST - Price History</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
