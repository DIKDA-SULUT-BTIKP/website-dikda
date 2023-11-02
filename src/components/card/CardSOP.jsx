import React from "react";
import { Link } from "react-router-dom";

const CardSOP = ({ title, description, link }) => {
  return (
    <div className="bg-white rounded-[4px] shadow-xl opacity-100 w-80 card">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="justify-end card-actions">
          <Link to={`/sop/detail/${link}`} className="btn btn-primary">
            Detail
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardSOP;
