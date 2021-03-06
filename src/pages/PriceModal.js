import React from "react";
import {Line} from "react-chartjs-2";
import "../styles/price-history-modal.scss";

var moment = require("moment");
moment().format();

const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

export const PriceModal = (props) => {
  const history = props.priceHistory;

  let prices = [];
  for (let i = 0; i < history.length; i++) {
    prices.push(history[i].price);
  }

  let dates = [];
  for (let i = 0; i < history.length; i++) {
    if (moment(history[i].date).format("h:mm a - D MMM") !== "Invalid date") {
      dates.push(moment(history[i].date).format("h:mm a - D MMM"));
    } else {
      dates.push(history[i].date);
    }
  }

  const data = {
    labels: dates,
    datasets: [
      {
        label: `${props.item} Price History`,
        data: prices,
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)",
      },
    ],
  };

  return (
    <div className="price__history__modal__background">
      <div className="price__history__modal__container">
        <button
          className="price__history__modal__close"
          onClick={props.modalClose}
        >
          X
        </button>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};
