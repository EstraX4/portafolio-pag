import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <p className="fs-2 fw-bold text-center" >{title}</p>
          <p className="fs-6 text-center">{description}</p>
        </div>
      </div>
    </Col>
  )
}
