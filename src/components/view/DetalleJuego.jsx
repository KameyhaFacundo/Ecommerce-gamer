import { Container, Card, Row, Col } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
// import "./DetalleJuego.css";

const DetalleProducto = () => {
  return (
    <Container className="my-3 mainSection bg-dark">
      <Card className="bg-dark">
        <Row>
          <Col md={6}>
            <Card.Img
              variant="top"
              src="https://elukelele.com/wp-content/uploads/2022/08/Lanzamiento-de-eFootball-2023-Para-iniciar-la-nueva-temporada-Konami-pone-en-marcha-un-Dream-Team-2.jpg"
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
                <span className=" fw-semibold ">Precio:</span> $1.740,00
                <br />
                <Button variant="outline-success">
                  Agregar a carrito
                </Button>{" "}
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
      <Card>
        <Card.Body variant="primary">Requisitos del sistema</Card.Body>
      </Card>

      <ListGroup className="Requisitos">
        <ListGroup.Item variant="dark">Memoria Ram: </ListGroup.Item>
        <ListGroup.Item>Espacio en disco</ListGroup.Item>
        <ListGroup.Item>Tarjeta Grafica</ListGroup.Item>
        <ListGroup.Item>Sistema operativo</ListGroup.Item>
        <ListGroup.Item>Procesador</ListGroup.Item>
      </ListGroup>
    </Container>
  );
};

export default DetalleProducto;
