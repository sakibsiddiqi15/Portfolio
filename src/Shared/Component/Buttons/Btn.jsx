import React from "react";

const Btn = ({ children, ...rest }) => {
  return (<button {...rest} className="btn">{children}</button>);
};

export default Btn;
