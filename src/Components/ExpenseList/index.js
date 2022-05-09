import React from "react";
import { useSelector } from "react-redux";
import Card from "./Card";
import "./expenselist.css";

const ExpenseList = () => {
  const expenseList = useSelector((state) => state.expenseReducer.expenseList);

  return (
    <div className="expense-list">
      {expenseList.length >= 2 ? (
        expenseList.map((item, index) => {
          if (index >= 2) {
            return <Card item={item} />;
          }
        })
      ) : (
        <div className="empty-state">
          <img
            src={require("../../assets/images/empty.png")}
            alt=""
            className="empty-image"
          />
          Sorry! No list available
        </div>
      )}
    </div>
  );
};

export default ExpenseList;
