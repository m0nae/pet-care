import "./App.css";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/">
            <p>Landing page</p>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
