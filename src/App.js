import React from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Balance from "./components/Balance";
import AddTransactions from "./components/AddTransactions";
import IncomeList from "./components/IncomeList";
import ExpenseList from "./components/ExpenseList";

import { GlobalContextProvider } from "./context/GlobalState";

import "./App.css";

const App = () => {
  return (
    <GlobalContextProvider>
      <div className="container-fluid h-100 p-0 m-0 d-flex flex-column justify-content-between">
        <Header />

        <div className="mx-lg-5 mx-sm-3 overflow-hidden" id="global">
          <div className="container-fluid p-0 m-0">
            <div className="row px-0 p-0 m-0 align-items-center">
              <div
                className="col-md-4 p-0 m-0 align-self-stretch d-flex align-items-center"
                id="balance"
              >
                <Balance />
              </div>

              <div className="col-md-8 p-0 m-0" id="addTransaction">
                <AddTransactions />
              </div>
            </div>
          </div>
          <h4 className="px-0 py-2 m-0 text-center bg-dark text-white">
            Transaction History
          </h4>
          <div className="container-fluid p-0 m-0">
            <div className="row p-0 m-0">
              <div className="col p-0 m-0">
                <IncomeList />
              </div>
              <div className="col p-0 m-0">
                <ExpenseList />
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </GlobalContextProvider>
  );
};

export default App;
