import Home from "./Pages/Home";
import Header from "../src/Pages/header/index";
import AddExpense from "./Pages/AddExpense";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-expenses" element={<AddExpense />} />
      </Routes>
    </>
  );
}

export default App;
