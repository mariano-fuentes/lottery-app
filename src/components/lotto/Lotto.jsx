import React, { Component } from 'react';
import Button from '../generateBtn/GenerateBtn';
import Ball from '../ball/Ball';

import './lotto.css';

class Lotto extends Component{
  constructor(props){
    super(props);
    this.amountOfBalls=props.amount
    this.title=props.title;
    this.state= { 
      ballArr: []
    }
  }

  generateHandler= (amount=6) => {
    let arr = [];
    for(let i=0;i<amount;i++) {
      let rando=Math.floor(Math.random()*9);
      arr.push(rando);
    }
    this.setState({
      ballArr: [...arr]
    });
  }

  render(){
    return (
      <div className="lotto-container">
        <h1>{this.title}</h1>
        <div className="balls-container">
          {this.state.ballArr ? 
            this.state.ballArr.map((item, index)=>{
              return(
                <Ball number={item} key={index}></Ball>
              )
            }): null
          }
        </div>
        <Button generate={()=>this.generateHandler(this.amountOfBalls)} title="Generate"></Button>
      </div>
    );
  };
};

export default Lotto;