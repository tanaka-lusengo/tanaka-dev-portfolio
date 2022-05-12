import "./App.scss";
import { Redirect, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Redirect from="/home" to="/" />
        <Route path="/" exact component={home} />
      </Switch>
    </div>
  );
}

export default App;
