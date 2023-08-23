import { Container, Card, Row, Col, Button, ListGroup } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { obtenerJuego } from "../helpers/queries";
import "./DetalleJuego.css"

const DetalleJuego = () => {
  const [juego, setJuego] = useState("");
  const [categoria, setCategoria] = useState("");
  const [procesador, setProcesador] = useState("");
  const [sistemaoperativo, setSistemaOperativo] = useState("");
  const [tarjetagrafica, setTarjetaGrafica] = useState("");

  const { id } = useParams();
  useEffect(() => {
    obtenerJuego(id).then((resp) => {
      const variable = resp;
      setJuego(variable);
      const categoriaId = resp.categorias[0].categoria;
      const procesadorId = resp.procesadores[0].procesador;
      const sistemaOperativoId = resp.sistemasOperativos[0].sistemaOperativo;
      const tarjetaGraficaId = resp.tarjetasGraficas[0].tarjetaGrafica;
      setCategoria(categoriaId);
      setProcesador(procesadorId);
      setSistemaOperativo(sistemaOperativoId);
      setTarjetaGrafica(tarjetaGraficaId);
    });
  }, []);
  return (
    <>
      <Container className="my-3 mainSection bg-dark">
        <div className="bg-dark">
          <Row>
            <Col xl={6}>
              <Card.Img
                variant="top"
                src={juego.imagen}
                alt="Descripción imagen"
              />
            </Col>
            <Col xl={6}>
              <Card.Body>
                <Card.Title className="text-light mt-4">
                  <h1> {juego.nombreJuego}</h1>
                </Card.Title>
                <hr />
                <div className="text-light">
                  <h5> {juego.descripcion}</h5>
                  <br />
                  <br />
                  <span className=" fw-semibold ">
                    <h3>Categoria: {categoria}</h3>
                  </span>
                  <br />
                  <span className=" fw-semibold ">
                    <h3> Desarrollador: {juego.desarrollador}</h3>
                  </span>
                  <br />
                  <span className=" fw-semibold ">
                    <h3> Fecha Lanzamiento: {juego.fechaDeLanzamiento}</h3>
                  </span>
                  <br />
                  <span className=" fw-semibold ">
                    <h3>Precio: ${juego.precio}</h3>
                  </span>
                  <br />
                </div>
              </Card.Body>
            </Col>
          </Row>
        </div>
        <div>
          <div className="text-light mt-4 d-flex flex-column">
            <h2> Requisitos del Juego</h2>{" "}
            <span className=" fw-semibold ">
              <h4> Memoria Ram: {juego.memoriaRam} G</h4>
            </span>
            <span className=" fw-semibold ">
              <h4> Disco Duro: {juego.espacioDiscoDuro} G</h4>
            </span>
            <span className=" fw-semibold ">
              <h4>Procesador: {procesador} G</h4>
            </span>
            <span className=" fw-semibold ">
              <h4>Sistema Operativo: {sistemaoperativo} G</h4>
            </span>
            <span className=" fw-semibold ">
              <h4> Tarjeta Grafica: {tarjetagrafica} G</h4>
            </span>
          </div>
        </div>
      </Container>
      <Container className="bg-dark">
        <div className="Title mb-5"><h2>Reseñas de {juego.nombreJuego}</h2></div>
      <div className="d-flex mb-4">
          <div className="img-usuario"><img src="https://images.pexels.com/photos/3020919/pexels-photo-3020919.jpeg" alt="" /></div>
          <div className="coment-user w-100">
            <Form >
              <Form.Group>
                <textarea className="coment-user w-100" name="xd" id="1" cols="30" rows="10" placeholder="Escribe tu comentario..."></textarea>
              </Form.Group>
            </Form>
            </div>
        </div>
        <div className="d-flex justify-content-end">
        <Button className="mb-5">Publicar</Button>

        </div>

        <div className="d-flex mb-4">
          <div className="img-usuario"><img src="https://images.pexels.com/photos/3020919/pexels-photo-3020919.jpeg" alt="" /></div>
          <div className="coment">
            <span>Texto</span>
            </div>
        </div>
        <div className="d-flex">
          <div className="img-usuario"><img src="https://images.pexels.com/photos/3020919/pexels-photo-3020919.jpeg" alt="" /></div>
          <div className="coment">
            <span>Texto</span>
            </div>
        </div>
      </Container>
    </>
  );
};

export default DetalleJuego;
