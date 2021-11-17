import React, {useEffect, useState} from "react";

import "../../styles/smelting.scss";
import Axios from "axios";

import {SmeltingItem} from "../../components/refining/smelting/SmeltingItem";

export const Smelting = () => {
  const [allItems, setAllItems] = useState();

  const [charcoal, setCharcoal] = useState();
  const [greenwood, setGreenwood] = useState();
  const [sandFlux, setSandFlux] = useState();
  const [obsidianFlux, setObsidianFlux] = useState();

  // Metals
  const [ironIngot, setIronIngot] = useState();
  const [ironOre, setIronOre] = useState();
  const [steelIngot, setSteelIngot] = useState();
  const [starmetalIngot, setStarmetalIngot] = useState();
  const [starmetalOre, setStarmetalOre] = useState();
  const [orichalecumIngot, setOrichalecumIngot] = useState();
  const [orichalecumOre, setOrichalecumOre] = useState();
  const [asmodeumIngot, setAsmodeumIngot] = useState();
  const [tolvium, setTolvium] = useState();
  const [cinnibar, setCinnibar] = useState();
  const [voidbentIngot, setVoidbentIngot] = useState();
  const [voidOre, setVoidOre] = useState();
  const [voidEssence, setVoidEssence] = useState();
  const [energyCore, setEnergryCore] = useState();

  //Precious Metals
  const [silverIngot, setSilverIngot] = useState();
  const [silverOre, setSilverOre] = useState();
  const [goldIngot, setGoldIngot] = useState();
  const [goldOre, setGoldOre] = useState();
  const [platinumIngot, setPlatinumIngot] = useState();
  const [platinumOre, setPlatinumOre] = useState();

  // console.log(greenwood);

  useEffect(() => {
    Axios.get("http://localhost:3001/all-items").then((response) => {
      let items = response.data;
      setAllItems(items);
      for (let i = 0; i <= items.length - 1; i++) {
        if (items[i].item === "Charcoal") {
          setCharcoal(items[i].value);
        } else if (items[i].item === "Green Wood") {
          setGreenwood(items[i].value);
        } else if (items[i].item === "Sand Flux") {
          setSandFlux(items[i].value);
        } else if (items[i].item === "Obsidian Flux") {
          setObsidianFlux(items[i].value);
        } else if (items[i].item === "Iron Ingot") {
          setIronIngot(items[i].value);
        } else if (items[i].item === "Iron Ore") {
          setIronOre(items[i].value);
        } else if (items[i].item === "Steel Ingot") {
          setSteelIngot(items[i].value);
        } else if (items[i].item === "Starmetal Ingot") {
          setStarmetalIngot(items[i].value);
        } else if (items[i].item === "Starmetal Ore") {
          setStarmetalOre(items[i].value);
        } else if (items[i].item === "Asmodeum Ingot") {
          setAsmodeumIngot(items[i].value);
        } else if (items[i].item === "Orichalecum Ingot") {
          setOrichalecumIngot(items[i].value);
        } else if (items[i].item === "Orichalecum Ore") {
          setOrichalecumOre(items[i].value);
        } else if (items[i].item === "Tolvium") {
          setTolvium(items[i].value);
        } else if (items[i].item === "Cinnibar") {
          setCinnibar(items[i].value);
        } else if (items[i].item === "Voidbent Ingot") {
          setVoidbentIngot(items[i].value);
        } else if (items[i].item === "Void Ore") {
          setVoidOre(items[i].value);
        } else if (items[i].item === "Void Essence") {
          setVoidEssence(items[i].value);
        } else if (items[i].item === "Energy Core") {
          setEnergryCore(items[i].value);
        } else if (items[i].item === "Silver Ingot") {
          setSilverIngot(items[i].value);
        } else if (items[i].item === "Silver Ore") {
          setSilverOre(items[i].value);
        } else if (items[i].item === "Gold Ingot") {
          setGoldIngot(items[i].value);
        } else if (items[i].item === "Gold Ore") {
          setGoldOre(items[i].value);
        } else if (items[i].item === "Platinum Ingot") {
          setPlatinumIngot(items[i].value);
        } else if (items[i].item === "Platinum Ore") {
          setPlatinumOre(items[i].value);
        }
      }
    });
  }, []);

  return (
    <div className="smelting">
      <div className="smelting__layout">
        <div className="smelting__item__container">
          <h1>Item List</h1>
          <h3 className="smelting__subheading">Charcoal & Flux</h3>
          <div className="smelting__layout">
            <div className="smelting__item__header__item">Item</div>
            <div className="smelting__item__header__value">Value</div>
            <div className="smelting__item__header__level">Level</div>
          </div>
          <SmeltingItem item="Charcoal" value={charcoal} level="0" />
          <h3 className="smelting__subheading">Metals</h3>
          <div className="smelting__layout">
            <div className="smelting__item__header__item">Item</div>
            <div className="smelting__item__header__value">Value</div>
            <div className="smelting__item__header__level">Level</div>
          </div>
          <SmeltingItem item="Iron Ingot" value={ironIngot} level="0" />
          <SmeltingItem item="Steel Ingot" value={steelIngot} level="0" />
          <SmeltingItem
            item="Starmetal Ingot"
            value={starmetalIngot}
            level="0"
          />
          <SmeltingItem
            item="Orichalecum Ingot"
            value={orichalecumIngot}
            level="0"
          />
          <h3 className="smelting__subheading">Precious Metals</h3>
          <div className="smelting__layout">
            <div className="smelting__item__header__item">Item</div>
            <div className="smelting__item__header__value">Value</div>
            <div className="smelting__item__header__level">Level</div>
          </div>
          <SmeltingItem item="Silver Ingot" value={silverIngot} level="0" />
          <SmeltingItem item="Gold Ingot" value={goldIngot} level="0" />
          <SmeltingItem item="Platinum Ingot" value={platinumIngot} level="0" />
        </div>
        <div className="smelting__recipe">
          <h3>Recipe</h3>
        </div>
      </div>
    </div>
  );
};
