import "./App.css";
import Footer from "./components/cummon/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Administrador from "./components/view/Administrador";
import Inicio from "./components/view/Inicio";
import Login from "./components/view/Login";
import AcercaDeNostros from "./components/view/AcercaDeNostros";
import Registro from "./components/view/Registro";
import DetalleJuego from "./components/view/DetalleJuego";
import CrearJuego from "./components/view/juego/CrearJuego";
import EditarJuego from "./components/view/juego/EditarJuego";
import EliminarJuego from "./components/view/juego/EliminarJuego";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error404 from "./components/view/Error404";
import ComprarJuego from "./components/view/ComprarJuego";
import Nav from "./components/cummon/Nav";
import { useState, useEffect } from "react";
import { listarUsuarios } from "./components/helpers/queries";
import EncapsularRutas from "./components/routes/EncapsularRutas";
import RutasProtegidas from "./components/routes/RutasProtegidas";

function App() {
  const UsuarioNoLogueado = {
    id: 0,
    rol: false
  }
  const usuarioOnline = JSON.parse(sessionStorage.getItem("usuarioLogeado")) || UsuarioNoLogueado;

  const [usuarioActivo, setUsuarioActivo] = useState(usuarioOnline);

useEffect(() => {
  console.log(parseInt(sessionStorage.getItem("usuarioLogeado")))
},[])

  return (
    <>
      <BrowserRouter>
        <Nav
          setUsuarioActivo={setUsuarioActivo}
          usuarioActivo={usuarioActivo}
        ></Nav>

        <Routes>
          <Route exact path="/" element={<Inicio></Inicio>}></Route>
          <Route
            exact
            path="/login"
            element={<Login setUsuarioActivo={setUsuarioActivo}></Login>}
          ></Route>
          <Route
            exact
            path="/acerca-de-nosotros"
            element={<AcercaDeNostros></AcercaDeNostros>}
          ></Route>
          <Route exact path="/registro" element={<Registro></Registro>}></Route>
          <Route
            exact
            path="/detalle/:id"
            element={<DetalleJuego></DetalleJuego>}
          ></Route>
          <Route
            exact
            path="/ComprarJuego/:id"
            element={<ComprarJuego usuarioActivo={usuarioActivo}></ComprarJuego>}
          ></Route>
          <Route
            path="/administrador/*"
            element={
              <EncapsularRutas>
                <RutasProtegidas />
              </EncapsularRutas>
            }
          ></Route>

          <Route exact path="*" element={<Error404></Error404>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
