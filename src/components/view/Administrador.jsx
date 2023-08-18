import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const Administrador = () => {
  const [juegos, setJuegos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const respuesta = await fetch("http://localhost:3004/juegos");
        const prueba = await respuesta.json();

        setJuegos(prueba);
      } catch (error) {
        // Manejar el error si la promesa se rechaza
        console.error("Error:", error);
      }
    };

    fetchData();
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
              <td>
                
              </td>
              <td>
                {juego.categorias.map((cat) => (
                  <span key={cat.id}>{cat.categoria}, </span>
                ))}</td>
              <td>{juego.fechaDeLanzamiento}</td>
              <td>
                <div>
                    Memoria Ram: {juego.memoriaRam}
                </div>
                <div>
                    Disco en Duro: {juego.espacioDiscoDuro}
                </div>
                <div>
                    Procesador: {juego.procesadores.procesador}
                </div>
                <div>
                    Sistema Operativo: {juego.sistemasOperativos.sistemaOperativo}
                </div>
                <div>
                    Tarjeta Grafica: {juego.tarjetasGraficas.tarjetaGrafica}
                </div>
                </td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </section>
  );
};

export default Administrador;
