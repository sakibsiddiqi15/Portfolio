import React from "react";

const Btn = ({ children, link, ...rest }) => {
  const className = "Btn rounded fill py-2 px-3";
  return (
    <>
      {link ? (
        <a
          {...rest}
          target="_blank"
          rel="noreferrer"
          href={link}
          className={className}
        >
          {children}
        </a>
      ) : (
        <button {...rest} className={className}>
          {children}
        </button>
      )}
    </>
  );
};

export default Btn;
