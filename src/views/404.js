import React from "react";

export const FourOFour = () => {
  return (
    <div class="container">
      <div class="segment">
        <div class="glitch">
          <span class="symbol shallow">404</span>
          <span class="symbol deep">404</span>
          <span class="line"></span>
        </div>
      </div>

      <div class="segment" style={{background: 'black'}}>
        <div class="glitch darken">
          <span class="symbol shallow">404</span>
          <span class="symbol deep">404</span>
          <span class="line"></span>
        </div>
      </div>
    </div>
  );
};
