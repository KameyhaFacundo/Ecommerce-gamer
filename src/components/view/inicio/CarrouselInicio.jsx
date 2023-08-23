import React, { useState, useEffect } from "react";
import { listarJuegos } from "../../helpers/queries";
import Carousel from "react-bootstrap/Carousel";
import "./CarrouselInicio.css";

function CarrouselInicio() {
  const [juegos, setJuegos] = useState([]);

  useEffect(() => {
    listarJuegos()
      .then((listajuegos) => {
        setJuegos(listajuegos);
      })
      .catch((error) => {
        console.error("Error al obtener los juegos:", error);
      });
  }, []);

  return (
    <>
      <div className="Inicio-img">
        <div>
          <span></span>
        </div>
        <div>
          <img
            className="img-3d-1"
            src="https://mario.nintendo.com/static/d783068682f98d6cfec666c747a27793/d6e64/mario.png"
            alt=""
          />
         
        </div>
        <div className="cuadrado-negro">
            <img src="https://res.cloudinary.com/dol1ba0ld/image/upload/v1692506264/image_17_timefm.png" alt="" />
          </div>
      </div>

      {/* ``<Carousel showControls fade>
      {juegos.map((juego) => (
       <Carousel.Item key={juego.id}>
       <img className="d-block w-100" src={juego.imagen} alt={juego.titulo} />
       <Carousel.Caption>
         <h3>{juego.titulo}</h3>
         <p>{juego.descripcion}</p>
       </Carousel.Caption>
     </Carousel.Item>
        
      ))}
    </Carousel> */}
    </>
  );
}

export default CarrouselInicio;
