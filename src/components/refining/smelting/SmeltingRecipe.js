import React, {useState} from "react";

export const SmeltingRecipe = (props) => {
  // could add a global volume state later
  const [craftVolume, setCraftVolume] = useState(1);
  const [bonus, setBonus] = useState(props.bonus);

  let mainItemRequired = props.mainItemRequired * craftVolume;
  let mainItemCost = props.mainItemValue * mainItemRequired;

  let totalCost = mainItemCost; // + the others if applicable

  let tax = props.tax * craftVolume;
  let bonusState = bonus * 0.01 + 1;
  let bonusTotal = bonusState * craftVolume; // Check new world rounding
  let subtotal = totalCost + tax;
  let valueCreated = bonusTotal * props.value;
  let profitLoss = valueCreated - subtotal;

  return (
    <div>
      <div className="smelting__layout">
        <p>
          {props.item} ({props.value} each)| volume =
        </p>
        <input
          placeholder="1 +"
          type="number"
          className="smelting__recipe__input"
          value={craftVolume}
          onChange={function (e) {
            setCraftVolume(e.target.value);
          }}
        />
      </div>
      {/* Headings */}
      <div className="smelting__layout">
        <div className="smelting__recipe__item">Item</div>
        <div className="smelting__recipe__item__value">Item Value</div>
        <div className="smelting__recipe__required">Required</div>
        <div className="smelting__recipe__cost">Total Cost</div>
      </div>
      {/* Items (some conditional)*/}
      <div className="smelting__layout">
        <div className="smelting__recipe__item">{props.mainItem}</div>
        <div className="smelting__recipe__item__value">
          {props.mainItemValue}
        </div>
        <div className="smelting__recipe__required">{mainItemRequired}</div>
        <div className="smelting__recipe__cost">{mainItemCost.toFixed(2)}</div>
      </div>
      <div className="smelting__layout">
        <div className="smelting__recipe__item_i">{props.item}</div>
        <div className="smelting__recipe__item__value_i">{props.value}</div>
        <div className="smelting__recipe__required_i">{/* Leave Blank */}</div>
        <div className="smelting__recipe__cost_i">{/* Leave Blank */}</div>
      </div>
      {/* Calculations*/}
      <div className="smelting__layout">
        <div className="smelting__recipe__calculations">
          <p>Cost to craft {craftVolume}</p>
          <p>Plus Crafting Tax</p>
          <p>Cost Subtotal</p>
          <div className="smelting__layout">
            <p>Bonus Modifier(%)</p>
          </div>
          <p>Items Crafted</p>
          <p>Value Created</p>
          <p>Profit Loss</p>
          {/* profit loss needs a colour condition */}
        </div>
        <div className="smelting__layout">
          <div>
            <div className="smelting__recipe__cost">{totalCost.toFixed(2)}</div>
            <div className="smelting__recipe__cost">{tax.toFixed(2)}</div>
            <div className="smelting__recipe__cost">{subtotal.toFixed(2)}</div>
            <input
              placeholder="* %"
              type="number"
              className="smelting__recipe__bonus__input"
              value={bonus}
              onChange={function (e) {
                setBonus(e.target.value);
              }}
            />
            <span>%</span>
            <div className="smelting__recipe__cost">{bonusTotal}</div>
            <div className="smelting__recipe__cost">
              {valueCreated.toFixed(2)}
            </div>
            <div className="smelting__recipe__cost">
              {profitLoss.toFixed(2)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
