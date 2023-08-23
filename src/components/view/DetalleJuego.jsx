import {
  Container,
  Card,
  Row,
  Col,
  Button,
  ListGroup,
  Form,
} from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { crearResenias, obtenerJuego } from "../helpers/queries";
import "./DetalleJuego.css";
import Resenia from "./Resenia.jsx";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import StarRating from './StarRating';


const DetalleJuego = ({ usuarioActivo }) => {
  const [juego, setJuego] = useState("");
  const [categoria, setCategoria] = useState("");
  const [procesador, setProcesador] = useState("");
  const [sistemaoperativo, setSistemaOperativo] = useState("");
  const [tarjetagrafica, setTarjetaGrafica] = useState("");
  const handleRatingChange = (value) => {
    console.log('Calificación seleccionada:', value);
    // Puedes hacer lo que necesites con el valor de la calificación aquí
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { id } = useParams();

  const onSubmit = (datos) => {
    datos["idJuego"] = parseInt(id) ;
    datos["idUsuario"] = parseInt(usuarioActivo.id);
    datos["nombreUsuario"] = usuarioActivo.nombreUsuario
    console.log("hola" + usuarioActivo);
    crearResenias(datos)
      .then((respuesta) => {
        
        console.log(datos)
        console.log("respuesta: " + respuesta.status);
        if (respuesta.status === 201) {
          Swal.fire(
            "Comentario Publicado",
            "Gracias por su brindarnos su opinion",
            "success"
          );
          reset();
        }
      })
      .catch((error) => {
        console.log(error);
        Swal.fire("Hubo un error", "Error al publicar el Comentario", "error");
      });
  };

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
            <h1>Sistema de Calificación</h1>
      <StarRating onChange={handleRatingChange} usuarioActivo={usuarioActivo} idJuego={id}/>
          </div>
        </div>
        
      </Container>
      <Container className="bg-dark">
        {usuarioActivo.id !== 0 ? (
          <>
            {" "}
            <div className="Title mb-5">
              <h2>Reseñas de {juego.nombreJuego}</h2>
            </div>
            <div className="d-flex mb-5">
              <div className="img-usuario d-flex flex-column">
                <img
                  src="https://us.123rf.com/450wm/get4net/get4net1902/get4net190209043/125446708-usuario-anónimo-sin-rostro.jpg"
                  alt=""
                />
                <p>{usuarioActivo.nombreUsuario}</p>
              </div>
              <div className="coment-user w-100">
                <Form className="mb-5" onSubmit={handleSubmit(onSubmit)}>
                  <Form.Group>
                    <textarea
                      className="form-control"
                      placeholder="Ingrese un Comentario"
                      {...register("resenia", {
                        minLength: {
                          value: 20,
                          message: "Debe ingresar como minimo 20 caracteres",
                        },
                        maxLength: {
                          value: 500,
                          message: "Debe ingresar como maximo 500 caracteres",
                        },
                      })}
                    />{" "}
                  </Form.Group>
                  <Button className="mb-5" type="submit">Publicar</Button>
                </Form>
              </div>
            </div>
            <div className="d-flex justify-content-end"></div>
            <Resenia juegoLog={id} ></Resenia>
            
            <div>
   
    </div>
          </>
        ) : (
          <></>
        )}
      </Container>
    </>
  );
};

export default DetalleJuego;
