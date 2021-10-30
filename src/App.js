
import './App.css';
import { Route, Switch } from "react-router-dom"
import Nav from "./components/nav";
import Stocks from "./pages/stocks";
import Main from "./pages/main";
import Price from "./pages/price";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/stocks">
          <Stocks />
        </Route>
        <Route path="/price/:symbol"
          render={(routerProps) => <Price {...routerProps} />}
        />
      </Switch>
    </div>
  );
}

export default App;
