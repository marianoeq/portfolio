import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import about from "./pages/about";
// import portfolio from "./pages/portfolio";
// import contactMe from "./pages/contactMe";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <div>
        {/* <Navbar />
        <Wrapper>
          <Route exact path="/" component={about} />
          <Route exact path="/about" component={about} />
          <Route exact path="/portfolio" component={portfolio} />
          <Route exact path="/contactMe" component={contactMe} />
        </Wrapper>
        <Footer /> */}
      </div>
    </Router>
  );
}

export default App;