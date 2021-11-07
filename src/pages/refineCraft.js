import React from "react";
import {Link} from "react-router-dom";
import "../styles/RefineCraft.scss";

import {Header} from "../components/Header";

export const RefineCraft = () => {
  return (
    <div>
      <div className="refine__craft">
        <Header />
        <h1 className="refine__craft__heading">Refining</h1>
        <Link to="/smelting">
          <button className="refine__craft__button">Smelting</button>
        </Link>
        <button className="refine__craft__button">Stonecutting</button>
        <button className="refine__craft__button">Leatherworking</button>
        <button className="refine__craft__button">Weaving</button>
        <button className="refine__craft__button">Woodworking</button>

        <h1 className="refine__craft__heading">Crafting</h1>
        <button className="refine__craft__button">Weaponsmithing</button>
        <button className="refine__craft__button">Armoring</button>
        <button className="refine__craft__button">Engineering</button>
        <button className="refine__craft__button">Jewelcrafting</button>
        <button className="refine__craft__button">Cooking</button>
        <button className="refine__craft__button">Furnishing</button>
      </div>
    </div>
  );
};
