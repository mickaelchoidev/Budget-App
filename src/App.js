import React from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";

import "./App.css";

const App = () => {
  return (
    <div className="container-fluid h-100 p-0 m-0 d-flex flex-column justify-content-between">
      <Header />

      <div className="mx-lg-5 mx-sm-3 overflow-hidden" id="global">
        <div className="container-fluid bg-warning">
          <div className="row px-0 py-5 m-0">
            <div className="col col-md-4 px-0 py-5 m-0"></div>
            <div className="col col-md-8 px-0 py-5 m-0"></div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default App;
