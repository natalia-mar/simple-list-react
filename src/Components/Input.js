import React from "react";

const Input = props => (
  <div>
    <h3>Address book</h3>
    <input
      value={props.handleValue}
      onChange={props.handleChange}
      placeholder="Enter phone number....." />
  </div>
);


export default Input