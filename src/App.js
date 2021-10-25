import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import "../src/styles/App.scss";

import "@fontsource/roboto";

import {index} from "./pages";
import {ItemIndex} from "./pages/item-index";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={index} />
        <Route path="/item-index" exact component={ItemIndex} />
      </Switch>
    </Router>
  );
}

export default App;
