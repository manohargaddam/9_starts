import React from 'react'
import {range} from 'lodash'

export default class Numbers extends React.Component{

  getElement = (num,ind) =>{
    if(this.props.selectedNumbers.indexOf(num) >= 0)
      return (<span key={ind} style={Numbers.selectedStyle}>{num}</span>)
    
    if (this.props.usedNumbers.indexOf(num) >= 0)
      return (<span key={ind} style={Numbers.usedStyle}>{num}</span>)

    return (<span key={ind} onClick={() => this.props.onSelect(num)}
      style={Numbers.defaultStyle}>{num}</span>)
  }

  render(){
    return (
      <div className="col-sm-12" style={{ textAlign: "center" }}>
        {range(1,10).map(this.getElement)}
      </div>
    )
  }

  static defaultStyle = {
    width: '35px',
    height: '35px',
    background: 'gray',
    borderRadius: '50%',
    display: 'inline-block',
    textAlign: 'center',
    paddingTop: '5px',
    marginLeft: "10px",
    cursor: 'pointer'
  }
  static selectedStyle = {
    width: '35px',
    height: '35px',
    background: 'gray',
    borderRadius: '50%',
    display: 'inline-block',
    textAlign: 'center',
    paddingTop: '5px',
    marginLeft: "10px",
    cursor: 'not-allowed',
    opacity:'0.5'
  }
  static usedStyle = {
    width: '35px',
    height: '35px',
    background: 'green',
    borderRadius: '50%',
    display: 'inline-block',
    textAlign: 'center',
    paddingTop: '5px',
    marginLeft: "10px",
    cursor: 'not-allowed'
  }
}