import React from "react";
import "./Expenses.css";
export default function Expenses(props) {
  return <div className="expenses">{props.children}</div>;
}
