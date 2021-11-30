import React from "react";

const Btn = ({ children, classes, link, ...rest }) => {
  const className = `${classes} Btn rounded fill py-2 px-3`;
  return (
    <>
      {link ? (
        <a
          {...rest}
          target="_blank"
          rel="noreferrer"
          href={link}
          className={className}
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
        >
          {children}
        </a>
      ) : (
        <button
          {...rest}
          className={className}
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
        >
          {children}
        </button>
      )}
    </>
  );
};

export default Btn;
