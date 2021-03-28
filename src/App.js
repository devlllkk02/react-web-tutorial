//Importing packages
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Importing Components
import Navbar from "./components/Navbar/Navbar.js";
import Image from "./components/Image/Image";

function App() {
  // HTML
  return (
    <Router>
      <div className="app">
        <Switch>
          {/* Home */}
          <Route path="/" exact>
            <Navbar page="home"/>
            <h1>Home</h1>
          </Route>
          {/* Services */}
          <Route path="/services">
            <Navbar page="services"/>
            <h1>Services</h1>
          </Route>
          {/* About */}
          <Route path="/about">
            <Navbar page="about"/>
            <h1>About</h1>
          </Route>
          {/* Contact */}
          <Route path="/contact">
            <Navbar page="contact"/>
            <h1>Contact</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;


