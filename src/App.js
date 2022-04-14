import { BrowserRouter as  Router ,Route} from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import React from "react";
import {Routes} from "react-router";


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>

        <Route path="/" component={Home} exact />
        </Routes>

          <Footer />
      </div>
       
    </Router>
    

  );
}

export default App;
