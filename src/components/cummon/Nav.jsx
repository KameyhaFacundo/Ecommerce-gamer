import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Login from "../view/Login";
import { Link, useNavigate } from "react-router-dom";
import { listarUsuarios } from "../helpers/queries";

function ItemNavbar({setUsuarioActivo, usuarioActivo, }) {
  const [showModal, setShowModal] = useState(false);
  const [usuarios, setUsuarios] = useState([]);
  const [admin, setAdmin] = useState([]);
  const [Actualizar, setActualizar] = useState([]);

const navagacion = useNavigate();
 

  useEffect(() => {
    listarUsuarios().then((usuario) => {
        setUsuarios(usuario);
    });
  
}, []);

useEffect(() => {
    usuarios.map((usuariobuscado) => {
        if (usuariobuscado.id === usuarioActivo) {
            setAdmin(usuariobuscado.rol);
        }
    });
   
}, [usuarios]);




  const handleShowModal = () => {
    setShowModal(true);
  };


  const handleCloseModal = () => {
    setShowModal(false);

  };


  const cerrarSesion = () => {

    setUsuarioActivo(0);
    sessionStorage.removeItem("usuarioLogeado");
    window.location.reload();
    navagacion("/")
  };
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Escape") {
        handleCloseModal();
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleCloseModal]);

  return (
    <>
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-body-tertiary sticky-top"
    >
      <Container>
        <Navbar.Brand >
          <Link to={"/"}>
            <Button variant="primary" type="submit">
              Inicio
            </Button>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
  {usuarioActivo.id === 0 ? (
    <>
      <Button variant="primary" type="submit" onClick={handleShowModal}>
        Login
      </Button>
      <Login
        className="h-25"
        showModal={showModal}
        handleCloseModal={handleCloseModal}
      />
    </>
  ) : usuarioActivo.rol === true ? (
    <>
      <Nav >
        <Link to={"/administrador"}>
          <Button variant="primary" type="submit">
            Administrador
          </Button>
        </Link>
      </Nav>
      <NavDropdown title="Usuario" id="collasible-nav-dropdown">
        <NavDropdown.Item >            <Link to={"/micuenta"}>Mi cuenta</Link>
</NavDropdown.Item>
        <NavDropdown.Item >Carrito</NavDropdown.Item>
        <NavDropdown.Item >Reseñas</NavDropdown.Item>
      </NavDropdown>
      <Nav  >
        <Link to={"/administrador"}>
        <Button variant="warning" onClick={()=>{cerrarSesion()}}>Logout</Button>

        </Link>
      </Nav>
    </>
  ) : (
    <>
      <NavDropdown title="Usuario" id="collasible-nav-dropdown">

            <Link to={"/micuenta"}>Mi cuenta</Link>
        <NavDropdown.Item >Carrito</NavDropdown.Item>
        <NavDropdown.Item >Reseñas</NavDropdown.Item>
      </NavDropdown>
      <Nav onClick={cerrarSesion} >
        <Link to={"/"} > 

                <Button variant="warning" onClick={()=>{cerrarSesion()}}>Logout</Button>
            
        </Link>
      </Nav>
  
    </>
  )}
</Nav>
          <Nav>
            <Nav >
              {" "}
              <Link to={"/administrador"}>
                <Button variant="primary" type="submit">
                  Acerca de Nosotros
                </Button>
              </Link>
            </Nav>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        
    </>
  );
}

export default ItemNavbar;
