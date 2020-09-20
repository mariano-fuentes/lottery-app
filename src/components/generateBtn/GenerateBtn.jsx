import React from 'react';
import './generateBtn.css';

const GenerateBtn = (props) => {
  return (
    <button className="btn" onClick={props.generate}>{props.title}</button>
  );
};

export default GenerateBtn;