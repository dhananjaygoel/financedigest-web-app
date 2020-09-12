import React, { useState, useEffect } from "react";

export const WatchListElement = (props) => {
  console.log(props);
  return (
    <tr>
      <td>
        <div style={{borderBottom: "1px solid", borderColor: 'inherit'}}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h4>{props.element.marketName}</h4>
            <h5>{props.element.price}</h5>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between"}}>
            <span>{props.element.name}</span>
            <div style={{display: "flex", justifyContent: 'space-around', width: '30%'}}>
              <span style={{color: props.element.priceChange > 0 ? '#2dce89' : 'red'}}>{props.element.priceChange}</span>
              <span style={{color: props.element.priceChange > 0 ? '#2dce89' : 'red'}}>{props.element.percentageChange}%</span>
            </div>
          </div>
        </div>
      </td>
    </tr>
  );
};
