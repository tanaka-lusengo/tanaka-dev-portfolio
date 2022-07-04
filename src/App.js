import "./App.scss";
import { Redirect, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import DotCursor from "./components/DotCursor/DotCursor";

function App() {
  return (
    <div className="App">
      <DotCursor />
      <Header />
      <Switch>
        <Redirect from="/home" to="/" />
        <Route path="/" exact component={Home} />
      </Switch>
    </div>
  );
}

export default App;
