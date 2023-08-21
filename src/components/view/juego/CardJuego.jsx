import React, { useState, useEffect } from "react";
import { ListGroup, Card, Pagination, Button } from 'react-bootstrap';
import "./CardJuego.css";

function CardJuego({ juegos }) {
  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentJuegos = juegos.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="result-none"> <>
      {currentJuegos.length === 0 ? (
        <p className="result-none">No se encontraron resultados
        </p>
      ) : (
        <div className="d-flex flex-wrap card-page-body">
          {currentJuegos.map((juego) => (
            <Card className="mx-3 Nav-link" key={juego.id} style={{ width: '18rem' }}>
              <Card.Img className="h-100" variant="top" src={juego.imagen} />
              <Card.Body className="card-body-size d-flex flex-column justify-content-center">
                <div className="d-flex justify-content-between">
                  <Card.Title>{juego.nombreJuego}</Card.Title>
                  <Card.Title className="custom-card-size">
                    {"$" + juego.precio}
                  </Card.Title>
                </div>
                <Button variant="warning">Ver más</Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      )}

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
    </>
    </div>

  );
}

export default CardJuego;