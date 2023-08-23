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
        console.log(usuario);
    });
  
}, []);

useEffect(() => {
    usuarios.map((usuariobuscado) => {
        if (usuariobuscado.id === usuarioActivo) {
            console.log(usuariobuscado.rol);
            setAdmin(usuariobuscado.rol);
        }
    });
    console.log(usuarioActivo.rol)
    console.log(usuarioActivo.id)
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
        <Navbar.Brand href="#home">
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
      <Nav.Link href="#pricing">
        <Link to={"/administrador"}>
          <Button variant="primary" type="submit">
            Administrador
          </Button>
        </Link>
      </Nav.Link>
      <NavDropdown title="Usuario" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Mi cuenta</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Carrito</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Reseñas</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link  href="#memes">
        <Link to={"/administrador"}>
        <Button variant="warning" onClick={()=>{cerrarSesion()}}>Logout</Button>

        </Link>
      </Nav.Link>
    </>
  ) : (
    <>
      <NavDropdown title="Usuario" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Mi cuenta</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Carrito</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Reseñas</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link onClick={cerrarSesion} >
        <Link to={"/"} > 

                <Button variant="warning" onClick={()=>{cerrarSesion()}}>Logout</Button>
            
        </Link>
      </Nav.Link>
  
    </>
  )}
</Nav>
          <Nav>
            <Nav.Link href="#deets">
              {" "}
              <Link to={"/administrador"}>
                <Button variant="primary" type="submit">
                  Acerca de Nosotros
                </Button>
              </Link>
            </Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        
    </>
  );
}

export default ItemNavbar;
