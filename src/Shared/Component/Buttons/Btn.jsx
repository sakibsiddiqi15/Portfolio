import React from "react";

const Btn = ({ children, classes, link, ...rest }) => {
  const className = `${classes} Btn rounded-3 fill py-2 px-4`;
  return (
    <>
      {link ? (
        <a
          {...rest}
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
