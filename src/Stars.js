import React from 'react';
import {range} from 'lodash';

export default (props) => {
  return (
    <div className="col-sm-4" style={{ fontSize: '2.5em', textAlign: "center"}}>
      {range(0,props.stars).map((val,ind) => <i key={ind} className="fa fa-star"></i>)}
    </div>
    )
  };