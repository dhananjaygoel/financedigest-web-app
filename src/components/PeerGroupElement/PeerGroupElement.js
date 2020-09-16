import React, { useState, useEffect } from "react";

export const PeerGroupElement = (props) => {
  return (
    <tr>
      <td>
        <div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h4>{props.element.marketName}</h4>
            <h5>{props.element.price}</h5>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span style={{ color: "#525f7f", paddingBottom: "7px" }}>
              {props.element.name}
            </span>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                width: "30%",
                color: props.element.priceChange > 0 ? "#2dce89" : "red"
              }}
            >
              {props.element.priceChange > 0 ? (
                  <i className="fas fa-chevron-up" style={{marginRight: '0.2em'}}></i>
                ) : (
                  <i className="fas fa-chevron-down" style={{marginRight: '0.2em'}}></i>
                )}
              <span
                style={{
                  color: props.element.priceChange > 0 ? "#2dce89" : "red",
                  marginRight: "0.6em",
                }}
              >
                
                {props.element.priceChange}
              </span>
              <span
                style={{
                  color: props.element.priceChange > 0 ? "#2dce89" : "red",
                }}
              >
                {props.element.percentageChange}%
              </span>
            </div>
          </div>
        </div>
      </td>
    </tr>
  );
};
