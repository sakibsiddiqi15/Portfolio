import React from "react";

const Btn = ({ children, ...rest }) => {
  return (
    <button {...rest} className="Btn rounded fill py-2 px-3">
      {children}
    </button>
  );
};

export default Btn;
