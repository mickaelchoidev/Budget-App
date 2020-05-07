import React from "react";

const Balance = () => {
  return (
    <div className="container-fluid p-0 mx-0 my-2">
      <h2 className="px-0 p-0 m-0 text-center text-white">Your balance</h2>
      <h2 className="px-0 p-0 m-0 text-center text-white">0,00 €</h2>
      <div className="row px-0 p-0 mx-0 mt-2 mb-0">
        <div className="col p-0 m-0">
          <h3 className="p-0 m-0 text-center text-white">Incomes</h3>
          <h3 className="p-0 m-0 text-center text-white">+ 0,00 €</h3>
        </div>
        <div className="col p-0 m-0">
          <h3 className="p-0 m-0 text-center text-white">Expenses</h3>
          <h3 className="p-0 m-0 text-center text-white">- 0,00 €</h3>
        </div>
      </div>
    </div>
  );
};

export default Balance;
