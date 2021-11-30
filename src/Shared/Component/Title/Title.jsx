import React from "react";
import { Container } from "react-bootstrap";

const Title = ({ children, title, icon, ...rest }) => {
  return (
    <div
      {...rest}
      className="bg-gradient"
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
    >
      <Container
        className="py-4 center text-light pt-5"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
      >
        {icon}
        <h2
          className="fw-bold ls-base text-uppercase mt-2"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
        >
          {title}
        </h2>
        <p
          className="col-10 col-md-6 col-lg-4 text-center lh-base lh-base"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
        >
          {children}
        </p>
      </Container>
    </div>
  );
};

export default Title;
