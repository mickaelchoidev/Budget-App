import React from "react";

const AddTransactions = () => {
  return (
    <div className="container-fluid p-0 m-0">
      <div className="row p-0 mx-0 my-3">
        <div className="col text-center pl-0 pl-sm-2 pr-1 m-0">
          <form>
            <div className="form-group p-0 m-0">
              <input
                type="text"
                className="form-control m-0"
                placeholder="Add incomes"
              />
              <input
                type="number"
                className="form-control mx-0 my-3"
                placeholder="Amount"
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
              />
              <input
                type="number"
                className="form-control mx-0 my-3"
                placeholder="Amount"
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
