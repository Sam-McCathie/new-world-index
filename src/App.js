import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {index} from "./pages";
import {tradingPost} from "./pages/trading-post";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={index} />
        <Route path="/trading-post" exact component={tradingPost} />
      </Switch>
    </Router>
  );
}

export default App;
