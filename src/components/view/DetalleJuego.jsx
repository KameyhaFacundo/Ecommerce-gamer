
import { Container, Card, Row, Col } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

const DetalleProducto = () => {
  return (
    <Container className="my-3 mainSection bg-dark">
      <Card className="bg-dark">
        <Row>
          <Col md={6}>
            <Card.Img
              variant="top"
              src="https://elukelele.com/wp-content/uploads/2022/08/Lanzamiento-de-eFootball-2023-Para-iniciar-la-nueva-temporada-Konami-pone-en-marcha-un-Dream-Team-2.jpg"
              alt="Descripción imagen"
            />
          </Col>
          <Col md={6}>
            <Card.Body>
              <Card.Title className="text-light">PES 2023</Card.Title>
              <hr />
              <Card.Text className="text-light">
                El corazón de eFootball es el eFootball World. Juega usando
                alguna de las grandes potencias futbolísticas con "Equipo
                genuino" o ficha y desarrolla a tus jugadores favoritos para
                formar tu "Equipo ideal". Ahora, gracias a que puedes jugar en
                línea desde cualquier dispositivo, podrás enfrentarte a rivales
                de todo el mundo y participar en diversos eventos.
                <br />
                <br />
                <span className=" fw-semibold ">Categoria:</span> Deportes
                <br />
                <span className=" fw-semibold ">Codigo:</span> 00001
                <br />
                <span className=" fw-semibold ">Desarrollador:</span>{" "}
                RollingGames
                <br />
                <span className=" fw-semibold ">Fecha Lanzamiento:</span>{" "}
                RollingGames
                <br />
                <span className=" fw-semibold ">Precio:</span> $5000,00
                <br />
                <Button variant="outline-success">
                  Agregar a carrito
                </Button>{" "}
                <Button variant="outline-info">Agregar a favoritos</Button>{" "}
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
      <Container>
        <Card>
          <Card.Body
            variant="warning"
            className="text-center bg-dark text-light"
          >
            Requisitos del sistema
          </Card.Body>
        </Card>

        <ListGroup className="text-center bg-dark text-light ">
          <ListGroup.Item className="text-center bg-dark text-light">
            Memoria Ram:{" "}
          </ListGroup.Item>
          <ListGroup.Item className="text-center bg-dark text-light">
            Espacio en disco
          </ListGroup.Item>
          <ListGroup.Item className="text-center bg-dark text-light">
            Tarjeta Grafica
          </ListGroup.Item>
          <ListGroup.Item className="text-center bg-dark text-light">
            Sistema operativo
          </ListGroup.Item>
          <ListGroup.Item className="text-center bg-dark text-light">
            Procesador
          </ListGroup.Item>
        </ListGroup>
      </Container>

      <Container>
        <Card>
          <Card.Body variant="warning" className="text-left bg-dark text-light">
            Reseñas del juego
          </Card.Body>
        </Card>
        <FloatingLabel
          controlId="floatingTextarea"
          label="Comments"
          className="mb-3"
        >
          <Form.Control as="textarea" placeholder="Leave a comment here" />
        </FloatingLabel>
        <FloatingLabel controlId="floatingTextarea2" label="Comments">
          <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            style={{ height: "100px" }}
          />
        </FloatingLabel>
      </Container>
    </Container>
  );
};

export default DetalleProducto;

