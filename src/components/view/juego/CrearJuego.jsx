import React from "react";
import { Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";

function CrearJuego() {
  const [categorias, setCategorias] = useState([]);
  const [procesadores, setProcesadores] = useState([]);
  const [sistemasoperativos, setSistemasOperativos] = useState([]);
  const [tarjetasgraficas, setTarjetasGraficas] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const respuesta1 = await fetch("http://localhost:3004/categorias");
        const respuesta2 = await fetch("http://localhost:3004/procesadores");
        const respuesta3 = await fetch("http://localhost:3004/sistemasOperativos");
        const respuesta4 = await fetch("http://localhost:3004/tarjetasGraficas");

        const listacategorias = await respuesta1.json();
        const listaprocesadores = await respuesta2.json();
        const listasistemasoperativos = await respuesta3.json();
        const listatarjetasgraficas = await respuesta4.json();


        setCategorias(listacategorias);
        setProcesadores(listaprocesadores);
        setSistemasOperativos(listasistemasoperativos);
        setTarjetasGraficas(listatarjetasgraficas);

      } catch (error) {
        // Manejar el error si la promesa se rechaza
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <section className="container mainSection">
        <h1 className="display-4 mt-5">Nuevo Juego</h1>
        <hr />
        <Form>
          <Form.Group className="mb-3" controlId="formNombreJuego">
            <Form.Label>Juego</Form.Label>
            <Form.Control type="text" placeholder="Ej: Mario Bros" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPrecio">
            <Form.Label>Precio</Form.Label>
            <Form.Control type="number" placeholder="Ej: 500" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formCategoria">
            <Form.Label>Categoria*</Form.Label>
            <Form.Select>
              <option value="">Seleccione una opcion</option>
              {categorias.map((categoria)=>(
              <option key={categoria.id} value={categoria.categoria}>{categoria.categoria}</option>

              ))}
              
            </Form.Select>
            <Form.Group className="mb-3" controlId="formImagen" >
              <Form.Label>Imagen URL*</Form.Label>

              <Form.Control
                type="text"
                placeholder="Ej: https://www.pexels.com/es-es/vans-en-blanco-y-negro-fuera-de-la-decoracion-para-colgar-en-la-pared-1230679/"
              />
            </Form.Group>
          </Form.Group>
          <Form.Label>Requerimiento del sistema</Form.Label>
          <Form.Group className="mb-3" controlId="formRam">
            <Form.Label>Memoria Ram</Form.Label>
            <Form.Control type="number" placeholder="Ej: 8G" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formDisco">
            <Form.Label>Disco Duro</Form.Label>
            <Form.Control type="number" placeholder="Ej: 128G" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formProcesador">
            <Form.Label>Procesador</Form.Label>
            <Form.Select>
              <option value="">Seleccione una opcion</option>
              {procesadores.map((procesador)=>(
              <option key={procesador.id} value={procesador.procesador}>{procesador.procesador}</option>

              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formSistemaOperativo">
            <Form.Label>Sistema Operativo</Form.Label>
            <Form.Select>
              <option value="">Seleccione una opcion</option>
              {sistemasoperativos.map((sistemaoperativo)=>(
              <option key={sistemaoperativo.id} value={sistemaoperativo.sistemaOperativo}>{sistemaoperativo.sistemaOperativo}</option>

              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formTarjetaGrafica">
            <Form.Label>Tarjeta Grafica</Form.Label>
            <Form.Select>
              <option value="">Seleccione una opcion</option>
              {tarjetasgraficas.map((tarjetagrafica)=>(
              <option key={tarjetagrafica.id} value={tarjetagrafica.tarjetaGrafica}>{tarjetagrafica.tarjetaGrafica}</option>

              ))}
            </Form.Select>
          </Form.Group>
          <Button variant="primary" type="submit">
            Guardar
          </Button>
        </Form>
      </section>
    </>
  );
}

export default CrearJuego;
