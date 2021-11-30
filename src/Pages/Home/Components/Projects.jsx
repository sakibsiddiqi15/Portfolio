import React from "react";
import Title from "../../../Shared/Component/Title/Title";
import { Col, Container, Row } from "react-bootstrap";
import MyCard from "../../../Shared/Component/Cards/MyCard";
import { AiFillProject } from "react-icons/all";
import useProjects from "../../../Hooks/useProjects";
const Projects = () => {
  const {projects} = useProjects();
  return (
    <section id="projects" className="vh-min-100">
      <Title title="Projects" icon={<AiFillProject size={50} />}>
        As a web developer I have some Project. In this section I added some of
        my projects.
      </Title>
      <Container>
        <Row xs={1} md={2} lg={3} className="mt-5 g-4 mb-4">
          {projects.map((project) => (
            <Col>
              <MyCard
                img={project?.img[0]}
                title={project.title}
                github={project.github}
                livesite={project.live}
                route={project.route}
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
