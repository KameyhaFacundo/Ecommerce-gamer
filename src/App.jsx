import "./App.css";
import Footer from "./components/cummon/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Administrador from "./components/view/Administrador";
import Inicio from "./components/view/Inicio"
import Login from "./components/view/Login"
import AcercaDeNostros from "./components/view/AcercaDeNostros"
import Registro from "./components/view/Registro"
import DetalleJuego from "./components/view/DetalleJuego"
import CrearJuego from "./components/view/juego/CrearJuego"
import EditarJuego from "./components/view/juego/EditarJuego"
import EliminarJuego from "./components/view/juego/EliminarJuego"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error404 from "./components/view/Error404";
import ComprarJuego from "./components/view/ComprarJuego";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Inicio></Inicio>}></Route>
          <Route exact path="/login" element={<Login></Login>}></Route>
          <Route exact path="/acerca-de-nosotros" element={<AcercaDeNostros></AcercaDeNostros>}></Route>
          <Route exact path="/registro" element={<Registro></Registro>}></Route>
          <Route exact path="/detalle/:id" element={<DetalleJuego></DetalleJuego>}></Route>
          <Route exact path="/ComprarJuego/:id" element={<ComprarJuego></ComprarJuego>}></Route>
          <Route exact path="/administrador" element={<Administrador></Administrador>}></Route>
          <Route exact path="/administrador/crear" element={<CrearJuego></CrearJuego>}></Route>
          <Route exact path="/administrador/editar/:id" element={<EditarJuego></EditarJuego>}></Route>
          <Route exact path="/administrador/eliminar" element={<EliminarJuego></EliminarJuego>}></Route>

          <Route exact path="*" element={<Error404></Error404>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
