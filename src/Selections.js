import React from 'react'

export default class Selections extends React.Component {
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

  render() {
    return (
      <div className="col-sm-4">
        {this.props.selectedNumbers.map((num,ind) => 
          <span key="ind" onClick={() => this.props.deSelect(num)} style={Selections.defaultStyle}>{num}</span>)}
      </div>
    )
  }
}
