import React from "react";
import './FunctionComponent.css';

const FunctionComponent = (props) => {

  return (
      <div className="card">
        <div className="logo">
          <img src={props.Data.image} alt={props.Data.Brand} />
        </div>
        <div className="info">
          <div>Brand : {props.Data.Brand}</div>
          <div>Price : {props.Data.Price}</div>
        </div>
      </div>
  );
};

export default FunctionComponent;