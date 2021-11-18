import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import "../src/styles/App.scss";

import "@fontsource/roboto";

import {index} from "./pages";
import {ItemIndex} from "./pages/item-index";
import {RefineCraft} from "./pages/refineCraft";
import {Smelting} from "./pages/refining/smelting";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={index} />
        <Route path="/item-index" exact component={ItemIndex} />
        <Route path="/refine-&-craft" exact component={RefineCraft} />
        <Route path="/smelting" exact component={Smelting} />
      </Switch>
    </Router>
  );
}

export default App;
