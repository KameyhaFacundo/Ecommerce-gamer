import React from "react";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import {
  listarJuegos,
  listarCategorias,
  listarProcesadores,
  listarSistemasOperativos,
  listarTarjetasGraficas,
} from "../../helpers/queries";

import { crearJuego } from "../../helpers/queries";

function CrearJuego() {
  const [categorias, setCategorias] = useState([]);
  const [procesadores, setProcesadores] = useState([]);
  const [sistemasoperativos, setSistemasOperativos] = useState([]);
  const [tarjetasgraficas, setTarjetasGraficas] = useState([]);

  const { register, handleSubmit, setValue } = useForm();


  function seleccionarObjeto(lista, campo, datos) {
    const seleccionado = lista.find((item) => item.id === parseInt(datos[campo]));
    if (seleccionado) {
      datos[campo] = [seleccionado];
    }
  }

  const onSubmit = (datos) => {
    seleccionarObjeto(categorias, "categorias", datos);
  seleccionarObjeto(procesadores, "procesadores", datos);
  seleccionarObjeto(sistemasoperativos, "sistemasOperativos", datos);
  seleccionarObjeto(tarjetasgraficas, "tarjetasGraficas", datos);
  crearJuego(datos);
  };
  useEffect(() => {
    listarCategorias().then((listacategorias) => {
      setCategorias(listacategorias);
    }),
      listarProcesadores().then((listaprocesadores) => {
        setProcesadores(listaprocesadores);
      }),
      listarSistemasOperativos().then((listasistemasoperativos) => {
        setSistemasOperativos(listasistemasoperativos);
      }),
      listarTarjetasGraficas().then((listatarjetasgraficas) => {
        setTarjetasGraficas(listatarjetasgraficas);
      });
  }, []);

  return (
    <>
      <section className="container mainSection">
        <h1 className="display-4 mt-5">Nuevo Juego</h1>
        <hr />
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="formNombreJuego">
            <Form.Label>Juego</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: Mario Bros"
              {...register("nombreJuego")}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPrecio">
            <Form.Label>Precio</Form.Label>
            <Form.Control
              type="number"
              placeholder="Ej: 500"
              {...register("precio")}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formFechaLanzamiento">
            <Form.Label>Fecha de Lanzamiento</Form.Label>
            <Form.Control
              placeholder="Ej: 01-01-2000"
              {...register("fechaDeLanzamiento")}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formDesarrollador">
            <Form.Label>Desarrollador</Form.Label>
            <Form.Control
              placeholder="Ingrese el nombre de la persona o empresa desarrolladora"
              {...register("desarrollador")}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formDescripcion">
            
            <Form.Label>Descripcion</Form.Label>
            <textarea className="form-control"
              placeholder="Ingrese una descripcion breve del juego, no mayor a 500 caracteres"
              {...register("descripcion")}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formCategoria">
            <Form.Label>Categoria*</Form.Label>
            <Form.Select {...register("categorias")}>
              <option value="">Seleccione una opcion</option>
              {categorias.map((categoria) => (
                <option key={categoria.id} value={categoria.id}>
                  {categoria.categoria}
                </option>
              ))}
            </Form.Select>
            <Form.Group className="mb-3" controlId="formImagen">
              <Form.Label>Imagen URL*</Form.Label>

              <Form.Control
                {...register("imagen")}
                type="text"
                placeholder="Ej: https://www.pexels.com/es-es/vans-en-blanco-y-negro-fuera-de-la-decoracion-para-colgar-en-la-pared-1230679/"
              />
            </Form.Group>
          </Form.Group>
          <Form.Label>
            <h3>Requerimiento del sistema</h3>
          </Form.Label>
          <Form.Group className="mb-3" controlId="formRam">
            <Form.Label>Memoria Ram</Form.Label>
            <Form.Control
              type="number"
              placeholder="Ej: 8G"
              {...register("memoriaRam")}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formDisco">
            <Form.Label>Disco Duro</Form.Label>
            <Form.Control
              type="number"
              placeholder="Ej: 128G"
              {...register("espacioDiscoDuro")}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formProcesador">
            <Form.Label>Procesador</Form.Label>
            <Form.Select {...register("procesadores")}>
              <option value="">Seleccione una opcion</option>
              {procesadores.map((procesador) => (
                <option key={procesador.id} value={procesador.id}>
                  {procesador.procesador}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
          
            <Form.Group className="mb-3" controlId="formSistemaOperativo">
              <Form.Label>Sistema Operativo</Form.Label>
              <Form.Select {...register("sistemasOperativos")}>
                <option value="">Seleccione una opcion</option>
                {sistemasoperativos.map((sistemaoperativo) => (
                  <option key={sistemaoperativo.id} value={sistemaoperativo.id}>
                    {sistemaoperativo.sistemaOperativo}
                  </option>
                ))}
              </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formTarjetaGrafica">
            <Form.Label>Tarjeta Grafica</Form.Label>
            <Form.Select {...register("tarjetasGraficas")}>
              <option value="">Seleccione una opcion</option>
              {tarjetasgraficas.map((tarjetagrafica) => (
                <option key={tarjetagrafica.id} value={tarjetagrafica.id}>
                  {tarjetagrafica.tarjetaGrafica}
                </option>
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
