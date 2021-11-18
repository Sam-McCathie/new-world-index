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
          <Link to="/refine-&-craft">
            <button>Refining & Crafting</button>
          </Link>
          <button>Crafting Calculator</button>
        </div>
      </div>
    </div>
  );
};
