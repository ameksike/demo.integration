import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Header />
    <div className="home">
      <Home />
    </div>
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
