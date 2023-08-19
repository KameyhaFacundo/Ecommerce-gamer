import { Button, Table } from "react-bootstrap";
import { useState, useEffect } from "react";
import { listarJuegos } from "../helpers/queries";

const Administrador = () => {
  const [juegos, setJuegos] = useState([]);

  useEffect(() => {
    listarJuegos()
      .then(listajuegos => {
        console.log(listajuegos);
        setJuegos(listajuegos);
      })
      .catch(error => {
        console.error("Error al obtener los juegos:", error);
      });
  }, []);

  return (
    <section className="container mainSection">
      <div className="d-flex justify-content-between align-items-center mt-5">
        <h1 className="display-4 ">Juegos disponibles</h1>
      </div>
      <hr />
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>Codigo</th>
            <th>Juego</th>
            <th>Precio</th>
            <th>URL de Imagen</th>
            <th>Categoria</th>
            <th>Fecha de Lanzamiento</th>
            <th>Requerimiento del Sistema</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {juegos.map((juego) => (
            <tr key={juego.id}>
              <td>{juego.id}</td>
              <td>{juego.nombreJuego}</td>
              <td>{juego.precio}</td>
              <td></td>
              <td>
                {juego.categorias.map((cat) => (
                  <span key={cat.id}>{cat.categoria}, </span>
                ))}
              </td>
              <td>{juego.fechaDeLanzamiento}</td>
              <td>
                <div>Memoria Ram: {juego.memoriaRam}</div>
                <div>Disco en Duro: {juego.espacioDiscoDuro}</div>
                <div>{juego.procesadores.map((pr) => (
                  <span key={pr.id}>{pr.procesador}, </span>
                ))} </div>
                <div>
                {juego.sistemasOperativos.map((so) => (
                  <span key={so.id}>{so.sistemaOperativo}, </span>
                ))}
                </div>
                <div>
                {juego.tarjetasGraficas.map((tg) => (
                  <span key={tg.id}>{tg.tarjetaGrafica}, </span>
                ))}
                </div>
              </td>
              <td>
                <div className="d-flex flex-column">

                  <Button variant="warning" className="mb-2">
                    Editar
                  </Button>
                  <Button variant="danger" className="mb-2">
                    Eliminar
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </section>
  );
};

export default Administrador;
