import React from 'react';
import './ball.css';

const Ball = (props) => {
  return (
    <div className="ball">
      <p>{props.number}</p>
    </div>
  );  
};

export default Ball;