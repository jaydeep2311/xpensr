import React, { useState } from "react";
import "./add-form.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faLocationArrow,
} from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { categories } from "../../constants/add-expense";
import { useDispatch } from "react-redux";
import { addExpense } from "../../redux/actions/expenses";
import SuccesModal from "./success-modal";

const AddForm = () => {
  const cat = categories;
  const [categoryOpen, setcategoryOpen] = useState(false);
  const [title, settitle] = useState("");
  const [Amount, setAmount] = useState(0);
  const [category, setcategory] = useState();
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();
  const handletitle = (e) => {
    settitle(e.target.value);
  };
  const handleAmount = (e) => {
    const value = parseFloat(e.target.value);
    if (!isNaN) {
      setAmount("");
      return;
    }
    setAmount(value);
  };
  const handleCategory = (category) => {
    setcategory(category);
    setcategoryOpen(false);
  };
  const handleSubmit = () => {
    if (title === "" || Amount === "" || !category) {
      const notify = () => toast("please enter valid data!");
      notify();
      return;
    }
    const data = {
      title,
      Amount,
      category,
      createdAt: new Date(),
    };

    dispatch(addExpense(data));
    setModalOpen(true);
  };
  return (
    <div className="add-form">
      <ToastContainer
        position="bottom-left"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
      />
      <SuccesModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
      <div className="form-item">
        <label>Title</label>
        <input
          type="text"
          placeholder="Give a name to expenditure"
          value={title}
          onChange={(e) => handletitle(e)}
        />
      </div>
      <div className="form-item">
        <label>Amount ₹</label>
        <input
          type="number"
          value={Amount}
          onChange={(e) => handleAmount(e)}
          placeholder="Enter Amount"
          className="amount-input"
        />
      </div>
      <div className="category-container-parent">
        <div className="category">
          <div
            className="category-dropdown"
            onClick={() => setcategoryOpen(!categoryOpen)}
          >
            <label>{category ? category.title : "Category"}</label>
            <FontAwesomeIcon icon={faAngleDown} />
            {categoryOpen && (
              <div className="category-container">
                {cat.map((category) => {
                  return (
                    <>
                      <div
                        className="category-item"
                        style={{
                          borderRight: `5px solid ${category.color}`,
                        }}
                        key={category.id}
                        onClick={() => handleCategory(category)}
                      >
                        <label>{category.title}</label>
                        <img src={category.icon} alt={category.title} />
                      </div>
                    </>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="form-add-button">
        <div onClick={handleSubmit}>
          <label>Add</label>
          <FontAwesomeIcon icon={faLocationArrow} />
        </div>
      </div>
    </div>
  );
};

export default AddForm;
