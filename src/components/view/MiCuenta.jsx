import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function MiCuenta({ usuarioActivo }) {
  useEffect(() => {
    console.log("banana" + usuarioActivo.id);
  }, []);
  const idUsuarioActivo = usuarioActivo.id;

  return (
    <>
      <div>
        <Button variant="dark">
          {" "}
          <Link to={`lista-de-deseos/${idUsuarioActivo}`}>
            Mi Lista de Deseos
          </Link>
        </Button>
      </div>
      <div>
      <Button variant="dark">
          {" "}
          <Link to={`administrador-resenias/${idUsuarioActivo}`}>
            Administrar Renias
          </Link>
        </Button>
      </div>
    </>
  );
}

export default MiCuenta;
