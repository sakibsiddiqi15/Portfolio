import React from "react";
import { Container } from "react-bootstrap";

const Title = ({ children, title, icon, ...rest }) => {
  return (
    <div {...rest} className="bg-gradient">
      <Container className="py-4 center text-light pt-5">
        {icon}
        <h2 className="fw-bold ls-base text-uppercase mt-2">{title}</h2>
        <p className="col-10 col-md-6 col-lg-4 text-center lh-base lh-base">{children}</p>
      </Container>
    </div>
  );
};

export default Title;
