import React, { useEffect, useState } from "react";
import Title from "../../../Shared/Component/Title/Title";
import { Col, Container, Row } from "react-bootstrap";
import MyCard from "../../../Shared/Component/Cards/MyCard";
import { AiFillProject } from "react-icons/all";
const Projects = () => {
  const [projectData, setProjectData] = useState([]);
  useEffect(() => {
    fetch("/project.data.json")
      .then((res) => res.json())
      .then((data) => setProjectData(data));
  }, []);
  return (
    <section className="vh-min-100">
      <Title title="Projects" icon={<AiFillProject size={50} />}>
        As a web developer I have some Project. In this section I added some of
        my projects.
      </Title>
      <Container>
        <Row xs={1} md={2} lg={3} className="mt-5 g-4 mb-4">
          {projectData.map((project) => (
            <Col>
              <MyCard
                img={project.img}
                title={project.title}
                github={project.github}
                livesite={project.live}
              >
                {project.text}
              </MyCard>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
