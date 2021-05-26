import React, { useState } from "react";

import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
export default function Expenses(props) {
  const [year, setYear] = useState("2020");
  const onSelectExepenseYear = (year) => {
    setYear(year);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === year;
  });

  return (
    <div className="expenses">
      <ExpenseFilter selected={year} onSelectChange={onSelectExepenseYear} />
      <ExpensesList items={filteredExpenses} />
    </div>
  );
}
