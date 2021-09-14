import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Auth/Login";
import Header from "./header/header"
import Register from "./Auth/Register";
import Reset from "./Auth/Reset";
import Dashboard from "./Dashboard";
import Cart from "./cart/Cart";
import User from "./login/User";

function App() {
  return (
    <div className="app">
      <Router>
        <Header/>
        <Switch>
          {/* <Route exact path="/" component={Login} /> */}
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/reset" component={Reset} />
          {/* <Route exact path="/dashboard" component={Dashboard} /> */}
          <Route exact path="/Cart" component={Cart} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/user" component={User} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;