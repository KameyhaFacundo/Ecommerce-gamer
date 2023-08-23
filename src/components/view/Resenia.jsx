import React, { useEffect, useState } from 'react';
import { listarenias } from '../helpers/queries';

function Resenia({ juegoLog }) {
  const [resenias, setResenias] = useState([]);
  const [reseniasFiltradas, setReseniasFiltradas] = useState([]);

  useEffect(() => {
    listarenias().then((respuesta) => {
      setResenias(respuesta);
    });
  }, []);

  useEffect(() => {
    const reseniaFiltrada = resenias.filter((resenia) => parseInt(resenia.idJuego) === parseInt(juegoLog));
    setReseniasFiltradas(reseniaFiltrada);
  }, [juegoLog, resenias]);

  return (
    <>
      {reseniasFiltradas.map((reseniafiltrada) => (
        <div key={reseniafiltrada.id} className="d-flex mb-5">
          <div className="img-usuario d-flex flex-column text-center">
            <img src="https://us.123rf.com/450wm/get4net/get4net1902/get4net190209043/125446708-usuario-anónimo-sin-rostro.jpg" alt="" />
            <p>{reseniafiltrada.nombreUsuario}</p>
          </div>
          <div className="coment">
            <span>{reseniafiltrada.resenia}</span>
          </div>
        </div>
      ))}
    </>
  );
}

export default Resenia;
