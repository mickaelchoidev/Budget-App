import React, { createContext, useReducer } from "react";

const initialState = {
  incomeTransactions: [
    { id: 1, incomeName: "Car sold", incomeAmount: 15000 },
    { id: 2, incomeName: "Salary", incomeAmount: 5000 },
    { id: 3, incomeName: "Bonus", incomeAmount: 13000 },
  ],
  expenseTransactions: [
    { id: 4, expenseName: "Rent", expenseAmount: 1000 },
    { id: 5, expenseName: "Bank", expenseAmount: 2000 },
    { id: 6, expenseName: "Clothes", expenseAmount: 500 },
  ],
};

export const GlobalState = createContext(initialState);
