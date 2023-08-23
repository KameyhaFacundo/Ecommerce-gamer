import { Table, Pagination, Button } from 'react-bootstrap';
import "./Administrador.css"
import { useState, useEffect } from "react";
import { listarJuegos } from "../helpers/queries";
import ItemJuego from "./juego/ItemJuego";
import { Link } from 'react-router-dom';

const Administrador = () => {
  const [juegos, setJuegos] = useState([]);
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentJuegos = juegos.slice(startIndex, startIndex + itemsPerPage);
  useEffect(() => {
    listarJuegos()
      .then(listajuegos => {
        setJuegos(listajuegos);
      })
      .catch(error => {
        console.error("Error al obtener los juegos:", error);
      });
  }, []);

  return (
    <section className="container mainSection">
      <div className="d-flex justify-content-between align-items-center mt-5">
        <h1 className="display-4 " >Juegos disponibles</h1>
        <Link to={"crear"}> <Button variant='success' >Agregar Juego</Button></Link>
       
      </div>
      <hr />
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th className='d-none d-md-table-cell'>Codigo</th>
            <th className='movile-adapt'>Juego</th>
            <th className='d-none d-md-table-cell'>Precio</th>
            <th className="d-none d-xl-block">Imagen</th>
            <th className="d-none d-xl-table-cell">Categoria</th>
            {/* <th>Fecha de Lanzamiento</th>
            <th>Requerimiento del Sistema</th> */}
            <th className='movile-adapt'>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {currentJuegos.map((juego) => (
            <ItemJuego key={juego.id} {...juego}></ItemJuego>
          ))}
        </tbody>
      </Table>
      {currentJuegos.length > 0 && (
        <Pagination className="d-flex justify-content-center mt-5">
          {Array.from({ length: Math.ceil(juegos.length / itemsPerPage) }).map((_, index) => (
            <Pagination.Item
              key={index + 1}
              active={index + 1 === currentPage}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </Pagination.Item>
          ))}
        </Pagination>
      )}
    </section>
  );
};

export default Administrador;
