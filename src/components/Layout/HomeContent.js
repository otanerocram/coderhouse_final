import { Container, Row, Col, Carousel } from "react-bootstrap";

const HomeContent = () => {
  
  return (
    <Container>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./assets/banner1.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./assets/banner2.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./assets/banner3.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>

      <Container style={{ marginTop: 30, marginBottom: 30 }}>
        <Row>
          <Col md={6} lg={6} className="text-center mb-4">
            <img
              style={{ width: "100%", borderRadius: 10 }}
              src="./assets/left-promo.webp"
              alt="left-promo"
            />
          </Col>
          <Col md={6} lg={6} className="text-center mb-4">
            <img
              style={{ width: "100%", borderRadius: 10 }}
              src="./assets/right-promo.webp"
              alt="left-promo"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default HomeContent;
