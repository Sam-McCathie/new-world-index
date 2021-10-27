import React from "react";
import {Line} from "react-chartjs-2";

//Sample Data
import {item} from "../data/items";

//Array position to change -> hard coded for now
const selectedItem = item[0];

let prices = [];
for (let i = 0; i < selectedItem.priceHistory.length; i++) {
  prices.push(selectedItem.priceHistory[i].price);
}

let dates = [];
for (let i = 0; i < selectedItem.priceHistory.length; i++) {
  dates.push(selectedItem.priceHistory[i].date);
}
console.log(dates);

const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

export const PriceHistory = () => {
  const data = {
    labels: dates,
    datasets: [
      {
        label: `${selectedItem.item} Price History`,
        data: prices,
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)",
      },
    ],
  };

  return (
    <div style={{width: 800 + "px"}}>
      <Line data={data} options={options} />
    </div>
  );
};
