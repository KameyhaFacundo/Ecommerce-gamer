import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { eliminarJuego } from '../../helpers/queries';
import Swal from "sweetalert2";
import "./ItemJuego.css"
function ItemJuego({id, nombreJuego, precio,imagen, fechaDeLanzamiento, categorias, memoriaRam, espacioDiscoDuro, procesadores, sistemasOperativos, tarjetasGraficas}) {
  const [isDeleted, setIsDeleted] = useState(false);

  useEffect(() => {
    if (isDeleted) {
      // Aquí podrías realizar cualquier acción necesaria después de la eliminación.
      console.log(`El juego con ID ${id} ha sido eliminado.`);
    }
  }, [isDeleted, id]);

  const handleEliminarClick = () => {
    Swal.fire({
      title: `¿Estás seguro de que quieres eliminar el juego ${nombreJuego}?`,
      text: 'Esta acción no se puede deshacer',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        eliminarJuego(id)
          .then((resp) => {
            if (resp.status === 200) {
              setIsDeleted(true);
              Swal.fire(
                "Juego Eliminado",
                "Su Juego fue eliminado correctamente",
                "success"
              );
            }
          })
          .catch((error) => {
            console.log(error);
            Swal.fire(
              "Hubo un error",
              "Error al intentar eliminar el juego",
              "error"
            );
          });
      }
    });
  };

  if (isDeleted) {
    return null; // No se renderiza nada si el juego ha sido eliminado
  }

  return (
    <tr>
      <td className='d-none d-md-table-cell'>{id}</td>
      <td className='movile-adapt'>{nombreJuego}</td>
      <td className='d-none d-md-table-cell'>${precio}</td>
      <td  className='d-none d-xl-flex justify-content-center content-img'><img className='img-item' src={imagen} alt={nombreJuego} /></td>

      <td className="d-none d-xl-table-cell" >
        {categorias.map((cat) => (
          <span key={cat.id}>{cat.categoria}, </span>
        ))}
      </td>
      {/* <td>{fechaDeLanzamiento}</td>
      <td>
        <div>Memoria Ram: {memoriaRam}</div>
        <div>Disco en Duro: {espacioDiscoDuro}</div>
        <div>{procesadores.map((pr) => (
          <span key={pr.id}>{pr.procesador}, </span>
        ))} </div>
        <div>
        {sistemasOperativos.map((so) => (
          <span key={so.id}>{so.sistemaOperativo}, </span>
        ))}
        </div>
        <div>
        {tarjetasGraficas.map((tg) => (
          <span key={tg.id}>{tg.tarjetaGrafica}, </span>
        ))}
        </div>
      </td> */}
      <td>
        <div className="d-flex flex-column content-button movile-adapt button-size">
          <Link className='Button w-50 mb-2 button-size' to={"editar/"+id}>
            <Button variant="warning" className="button-editar button-size">
              Editar
            </Button>
          </Link>
          <Button variant="danger" onClick={handleEliminarClick} className="button-size mb-2">
            Eliminar
          </Button>
        </div>
      </td>
    </tr>
  )
}

export default ItemJuego;
