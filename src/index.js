import React from 'react';
import { render } from 'react-dom';
import Stars from './Stars';
import Numbers from './Numbers';
import Submit from './Submit';
import Selections from './Selections';

class Game extends React.Component{
  getRandom = (max = 9) => {
    return Math.floor(Math.random() * Math.floor(max));
  }
  state = {
    stars: this.getRandom(),
    selectedNumbers :[],
    usedNumbers :[],
    correctAnswer:false,
    lifes: 5
  }
  selectNumber = (num) =>{
    if(this.state.selectedNumbers.indexOf(num)>=0) return;
    this.setState((prev) => ({ selectedNumbers: [...prev.selectedNumbers,num]}))
  }
  deSelectNumber = (num) => {
    this.setState((prev) => ({
      selectedNumbers: prev.selectedNumbers.filter( x=> x!== num)
    }))
  }
  submitAnswer = () =>{
    if(this.state.stars === this.state.selectedNumbers.reduce((a,val) => a+=val,0)){

      this.setState(prev => ({  usedNumbers: [...prev.usedNumbers,...prev.selectedNumbers],
                                selectedNumbers: [],
                                correctAnswer : true
                              }))
      
    }
  }
  nextGame = () =>{
    this.setState(prev => ({
      stars: this.getRandom(),
      correctAnswer: false
    }))
  }
  resetGame = () => {
    if(this.state.lifes === 0) return;

    this.setState(prev => ({
      stars: this.getRandom(),
      lifes: prev.lifes -1,
      selectedNumbers : []
    }))
  }

  render(){
    return(
      <div className="container">
        <div className="row"> Nine Starts</div>
        <hr/>
        <div className="row">
          <Stars stars={this.state.stars}/>
          <Submit resetGame={this.resetGame} lifes={this.state.lifes} nextGame={this.nextGame} submitAnswer={this.submitAnswer} correctAnswer={this.state.correctAnswer}/>
          <Selections deSelect={this.deSelectNumber} selectedNumbers={this.state.selectedNumbers} />
        </div>
        <hr/>
        <div className="row">
          <Numbers usedNumbers={this.state.usedNumbers} selectedNumbers={this.state.selectedNumbers} onSelect={this.selectNumber} />
        </div>
      </div>
    );
  }
}

render(<Game />, document.getElementById('root'));
