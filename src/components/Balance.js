import React, { useContext } from "react";

import { GlobalContext } from "../context/GlobalState";

const Balance = () => {
  const { incomeTransactions, expenseTransactions } = useContext(GlobalContext);

  const incomeAmounts = incomeTransactions.map((incomeTransaction) => {
    return incomeTransaction.incomeAmount;
  });

  const expenseAmounts = expenseTransactions.map((ExpenseTransaction) => {
    return ExpenseTransaction.expenseAmount;
  });

  const totalIncome = incomeAmounts
    .reduce((acc, item) => acc + item, 0)
    .toFixed(2);

  const totalExpense = expenseAmounts
    .reduce((acc, item) => acc + item, 0)
    .toFixed(2);

  return (
    <div className="container-fluid p-0 mx-0 my-2">
      <h2 className="px-0 p-0 m-0 text-center text-white">Your balance</h2>
      <h2 className="px-0 p-0 m-0 font-weight-bold text-center text-white">
        {(totalIncome - totalExpense).toFixed(2)} €
      </h2>
      <div className="row px-0 p-0 mx-0 mt-2 mb-0">
        <div className="col p-0 m-0">
          <h3 className="p-0 m-0 text-center text-primary">Incomes</h3>
          <h3 className="p-0 m-0 font-weight-bold text-center text-primary">
            + {totalIncome} €
          </h3>
        </div>
        <div className="col p-0 m-0">
          <h3 className="p-0 m-0 text-center text-danger">Expenses</h3>
          <h3 className="p-0 m-0 font-weight-bold text-center text-danger">
            - {totalExpense} €
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Balance;
