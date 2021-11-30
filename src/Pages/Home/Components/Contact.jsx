import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { Container, Row, Col } from "react-bootstrap";
import Title from "../../../Shared/Component/Title/Title";
import { BsChatSquareDots,SiMinutemailer } from "react-icons/all";
import Btn from "../../../Shared/Component/Buttons/Btn";
import { toast } from "react-toastify";
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    e.target.reset();
    const email_promise = emailjs.sendForm(
      "service_lk2obpb",
      "template_wvdd1l7",
      form.current,
      "user_Pk2Epco82p5KSFApq932v"
    );
    toast.promise(email_promise, {
      pending: "Wait a moment...",
      success: "I recieved..!",
      error: "Ops! Try again.",
    });
  };
  return (
    <section id="contact" className="vh-min-100">
      <Title title="Projects" icon={<BsChatSquareDots size={50} />}>
        As a web developer I have some Project. In this section I added some of
        my projects.
      </Title>
      <Container>
        <Row className="mt-5 mb-5 g-4">
          <Col xm={12} md={4} className="center">
            <img
              src="/Images/contact.png"
              alt="contact"
              className="img-fluid"
            />
          </Col>
          <Col xm={12} md={8}>
            <Row className="justify-content-center">
              <Col xs={10} md={8} lg={6}>
                <form ref={form} onSubmit={sendEmail}>
                  <label htmlFor="name_field">Name</label>
                  <input
                    required
                    type="text"
                    name="user_name"
                    id="name_field"
                    placeholder="Your Name"
                    className="input_element p-2 mb-4"
                  />
                  <label htmlFor="email_field">Email</label>
                  <input
                    required
                    type="email"
                    name="user_email"
                    id="email_field"
                    placeholder="Your email"
                    className="input_element p-2 mb-4"
                  />
                  <label htmlFor="message_field">Message</label>
                  <textarea
                    required
                    name="message"
                    id="message_field"
                    rows="5"
                    placeholder="write a hello message to me"
                    className="input_element p-2 mb-4"
                    spellCheck={true}
                  ></textarea>
                  <Btn type="submit">Send <SiMinutemailer/></Btn>
                </form>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
