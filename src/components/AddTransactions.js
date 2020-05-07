import React, { useState, useContext } from "react";

import { v4 as uuidv4 } from "uuid";
import { GlobalContext } from "../context/GlobalState";

const AddTransactions = () => {
  const { addIncome } = useContext(GlobalContext);

  const [income, setIncome] = useState({
    incomeName: "",
    incomeAmount: 0,
  });

  const { incomeName, incomeAmount } = income;

  const onChangeIncome = (e) => {
    setIncome({ ...income, [e.target.name]: e.target.value });
    console.log(income);
  };

  const onSubmitIncome = (e) => {
    e.preventDefault();

    const newIncomeTransaction = {
      id: uuidv4(),
      incomeName,
      incomeAmount: incomeAmount * 1,
    };

    console.log(newIncomeTransaction);

    addIncome(newIncomeTransaction);
  };

  return (
    <div className="container-fluid p-0 m-0">
      <div className="row p-0 mx-0 my-3">
        <div className="col text-center pl-0 pl-sm-2 pr-1 m-0">
          <form onSubmit={onSubmitIncome}>
            <div className="form-group p-0 m-0">
              <input
                type="text"
                name="incomeName"
                placeholder="Add incomes"
                className="form-control m-0"
                autoComplete="off"
                onChange={onChangeIncome}
              />

              <input
                type="number"
                name="incomeAmount"
                placeholder="Amount"
                className="form-control mx-0 my-3"
                autoComplete="off"
                required
                onChange={onChangeIncome}
              />

              <button type="submit" className="btn btn-danger m-0">
                Add new income
              </button>
            </div>
          </form>
        </div>
        <div className="col text-center pr-0 pr-sm-2 pl-1 m-0 ">
          <form>
            <div className="form-group p-0 m-0">
              <input
                type="text"
                className="form-control m-0"
                placeholder="Add expenses"
                autoComplete="off"
              />
              <input
                type="number"
                className="form-control mx-0 my-3"
                placeholder="Amount"
                autoComplete="off"
              />
              <button type="submit" className="btn btn-danger m-0">
                Add new expense
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTransactions;
