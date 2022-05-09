import React, { useState } from "react";
import "./topfold.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faPlus,
  faArrowLeft,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const TopFold = () => {
  const [query, setquery] = useState("");
  function handleChange(e) {
    setquery(e.target.vale);
  }
  return (
    <div className="topfold">
      {window.location.pathname === "/" ? (
        <>
          <div className="home-topfold">
            <div className="searchbar">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="search-icon"
              />
              <input
                type="text"
                placeholder="Search for expenses"
                value={query}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
          <Link to="/add-expenses">
            <div className="add-button">
              <FontAwesomeIcon icon={faPlus} />
              <label>Add</label>
            </div>
          </Link>
        </>
      ) : (
        <>
          <div className="add-topfold">
            <Link to="/">
              <div className="add-topfold-button">
                <FontAwesomeIcon icon={faArrowLeft} />
                Back
              </div>
            </Link>
            <Link to="/">
              <div className="add-topfold-button">
                <FontAwesomeIcon icon={faXmark} />
                Cancel
              </div>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default TopFold;
