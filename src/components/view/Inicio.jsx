import React from "react";
import CardJuego from "./juego/CardJuego";
import CarrouselInicio from "./inicio/CarrouselInicio";
import { set, useForm } from "react-hook-form";
import { Form, FormGroup } from "react-bootstrap";
import { useState, useEffect } from "react";
import {
  listarJuegos,
  listarCategorias,
  listarProcesadores,
  listarSistemasOperativos,
  listarTarjetasGraficas,
} from "../helpers/queries";
import "./Inicio.css"
function Inicio() {
  const [categorias, setCategorias] = useState([]);
  const [procesadores, setProcesadores] = useState([]);
  const [sistemasoperativos, setSistemasOperativos] = useState([]);
  const [tarjetasgraficas, setTarjetasGraficas] = useState([]);
  const [juegos, setJuegos] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    listarJuegos()
    .then((resultado) => {
      setJuegos(resultado)
    })
    .catch((error) => {
      console.error("Error:", error);
    });    listarCategorias().then((listacategorias) => {
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

  const onSubmit = (datos) => {
    listarJuegos()
      .then((resultado) => {
        const NuevaListaJuegos = resultado;

        CompararDatos(NuevaListaJuegos, datos);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  function CompararDatos(NuevaListaJuegos, datos) {
    const juegosFiltrados = [];

    NuevaListaJuegos.forEach((Juego) => {
      Juego.categorias.forEach((categoria) => {
        if (parseInt(categoria.id) === parseInt(datos["categorias"])) {
          juegosFiltrados.push(Juego);
        }
      });
    });

    console.log("juegosFiltrados:", juegosFiltrados);
    if (parseInt(datos["categorias"]) === 0) {
      setJuegos(NuevaListaJuegos);
    } else {
      setJuegos(juegosFiltrados);
    }
  }

  const handleChange = (e) => {
    const selectedCategoria = e.target.value;
    onSubmit({ categorias: selectedCategoria }); // Llamamos a onSubmit con el valor seleccionado

    // Hacer algo con el valor seleccionado si es necesario
  };

  return (
    <div className="body-search">
      <CarrouselInicio></CarrouselInicio>
      <Form>
        <FormGroup>
          <Form.Select
            className="select-option-categoria"
            {...register("categorias")}
            onChange={handleChange}
          >
            <option value="0">Seleccione una opción</option>
            {categorias.map((categoria) => (
              <option key={categoria.id} value={categoria.id}>
                {categoria.categoria}
              </option>
            ))}
          </Form.Select>
        </FormGroup>
      </Form>
      <CardJuego juegos={juegos} /> {/* Pasar el array de juegos como prop */}
    </div>
  );
}

export default Inicio;
