import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  const submitExpenseDataHandler = (submitedExpenseData) => {
    const expenseData = {
      ...submitedExpenseData,
      id: Math.random().toString(),
    };

    props.addExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSubmitExpenseData={submitExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
