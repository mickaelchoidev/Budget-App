import React, { useState, useContext } from "react";

import { v4 as uuidv4 } from "uuid";
import { GlobalContext } from "../context/GlobalState";

const AddTransactions = () => {
  const { addIncome, addExpense } = useContext(GlobalContext);

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

    if (incomeName !== "") {
      const newIncomeTransaction = {
        id: uuidv4(),
        incomeName,
        incomeAmount: incomeAmount * 1,
      };

      addIncome(newIncomeTransaction);

      setIncome({
        incomeName: "",
        incomeAmount: 0,
      });
    }
  };

  const [expense, setExpense] = useState({
    expenseName: "",
    expenseAmount: 0,
  });

  const { expenseName, expenseAmount } = expense;

  const onChangeExpense = (e) => {
    setExpense({ ...expense, [e.target.name]: e.target.value });
    console.log(expense);
  };

  const onSubmitExpense = (e) => {
    e.preventDefault();

    if (expenseName !== "") {
      const newExpenseTransaction = {
        id: uuidv4(),
        expenseName,
        expenseAmount: expenseAmount * 1,
      };

      addExpense(newExpenseTransaction);

      setExpense({
        ExpenseName: "",
        ExpenseAmount: 0,
      });
    }
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
                value={incomeName}
                placeholder="Add incomes"
                className="form-control m-0"
                autoComplete="off"
                onChange={onChangeIncome}
              />
              <input
                type="number"
                name="incomeAmount"
                value={incomeAmount}
                placeholder="Amount"
                className="form-control mx-0 my-3"
                autoComplete="off"
                onChange={onChangeIncome}
              />
              <button
                type="submit"
                className="btn m-0 text-light"
                id="buttonAdd"
              >
                Add new income
              </button>
            </div>
          </form>
        </div>
        <div className="col text-center pr-0 pr-sm-2 pl-1 m-0 ">
          <form onSubmit={onSubmitExpense}>
            <div className="form-group p-0 m-0">
              <input
                type="text"
                name="expenseName"
                value={expenseName}
                placeholder="Add expenses"
                className="form-control m-0"
                autoComplete="off"
                onChange={onChangeExpense}
              />
              <input
                type="number"
                name="expenseAmount"
                value={expenseAmount}
                placeholder="Amount"
                className="form-control mx-0 my-3"
                autoComplete="off"
                onChange={onChangeExpense}
              />
              <button
                type="submit"
                className="btn m-0 text-light"
                id="buttonAdd"
              >
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
