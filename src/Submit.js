import React from 'react'

export default (props) => (
  <div className="col-sm-4" style={{ textAlign: "center", marginTop: '10px'}}>
  { (props.correctAnswer) ?
      <button onClick={props.nextGame} className="btn btn-success"><i className="fa fa-check"></i></button> :
      <button onClick={props.submitAnswer} className="btn">=</button> 
  }
  <div style={{ marginTop: '10px'}}>
      <button onClick={props.resetGame} className="btn btn-danger">
        <i className="fa fa-refresh"></i>
        <span style={{paddingLeft : '5px'}}>{props.lifes}</span>
      </button>
  </div>
  </div>
);