import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import about from "./pages/About";
import portfolio from "./pages/Portfolio";
import contactMe from "./pages/contactMe";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import "./App.css";


function App() {
  return (
    <Router>
      <div>
        <Navbar/> 
        <Wrapper>
          <Route exact path="/" component={about} />
          <Route exact path="/about" component={about} />
          <Route exact path="/portfolio" component={portfolio} />
          <Route exact path="/contactMe" component={contactMe} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;