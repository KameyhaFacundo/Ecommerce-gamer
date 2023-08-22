import "./App.css";
import Footer from "./components/cummon/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/view/Login";
import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import { Button } from "react-bootstrap";

function App() {
  {
    /* Esto lo uso de prueba para probar el modal,lo que iria en el nav */
  }

  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  return (
    <>
      <BrowserRouter>
        {/* Esto lo uso de prueba para probar el modal,lo que iria en el nav */}
        <Button variant="primary" onClick={handleShowModal}>
          Abrir modal
        </Button>
        <Login showModal={showModal} handleCloseModal={handleCloseModal} />
      </BrowserRouter>
    </>
  );
}

export default App;
