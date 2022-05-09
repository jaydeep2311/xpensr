import React from "react";
import ExpenseList from "../../Components/ExpenseList";
import TopFold from "../../Components/topFold";
import "./Home.css";
const Home = () => {
  return (
    <>
      <div className="home">
        <TopFold />
        <ExpenseList />
      </div>
    </>
  );
};

export default Home;
