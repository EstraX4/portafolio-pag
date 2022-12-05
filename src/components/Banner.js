import { Container, Row } from "react-bootstrap";

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <container>
        <Row className="align-items-center">
          <col xs={12} md={6} xl={7}>
            <span className="tag-line">Welcome to my Portafolio</span>
            <h1>{}</h1>
          </col>
        </Row>
      </container>
    </section>
  );
};
