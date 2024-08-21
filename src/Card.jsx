import React from 'react';
import './App.css';
const Card = (props) => {
  console.log(props);
  return (
    <div className="border border-dark w-25">
      <div id="img-container">
        <img className="card-img-top" src={props.img} alt='error' />
      </div>   
      <div className="card-title">Pokemon Name : {props.name}</div>   
    </div>
  );
};

export default Card;