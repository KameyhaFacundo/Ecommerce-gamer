import "./App.css";
import Footer from "./components/cummon/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/view/Login";
import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import { Button } from "react-bootstrap";

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  return (
    <>
      <div>
        <Button variant="primary" onClick={handleShowModal}>
          Abrir modal
        </Button>

        <BrowserRouter>
          <Login showModal={showModal} handleCloseModal={handleCloseModal} />
        </BrowserRouter>
      </div>

      <Footer></Footer>
    </>
  );
}

export default App;
