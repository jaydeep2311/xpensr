import moment from "moment";
import React from "react";
import "./Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
const Card = ({ item }) => {
  console.log("inside");
  var time = moment(item.createdAt).fromNow();
  return (
    <div
      className="card"
      style={{
        borderRight: `6px solid ${item.category.color}`,
      }}
    >
      <div className="card-image-container">
        <img src={item.category.icon} alt="" srcset="" className="card-image" />
      </div>
      <div className="card-info">
        <label className="card-title">{item.title}</label>
      </div>
      <div className="card-right">
        <div>
          <label className="card-amount">₹ {item.Amount}</label>
        </div>
        <div className="delete-icon">
          <FontAwesomeIcon icon={faTrashCan} />
        </div>
      </div>
    </div>
  );
};

export default Card;
