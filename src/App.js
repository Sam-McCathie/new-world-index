import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import "../src/styles/App.scss";

import "@fontsource/roboto";

import {index} from "./pages";
import {ItemIndex} from "./pages/item-index";
import {PriceHistory} from "./pages/price-history";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={index} />
        <Route path="/item-index" exact component={ItemIndex} />
        <Route path="/price-history" exact component={PriceHistory} />
      </Switch>
    </Router>
  );
}

export default App;
