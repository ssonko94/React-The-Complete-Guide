import React, { useState } from "react";

import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
export default function Expenses(props) {
  const [year, setYear] = useState("2020");
  const onSelectExepenseYear = (year) => {
    setYear(year);
  };

  return (
    <div className="expenses">
      <ExpenseFilter selected={year} onSelectChange={onSelectExepenseYear} />
      {props.expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        ></ExpenseItem>
      ))}
    </div>
  );
}
