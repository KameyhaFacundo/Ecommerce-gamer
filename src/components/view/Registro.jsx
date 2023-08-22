import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './Registro.css'; // Importa el archivo CSS para los estilos

const Registro = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const gmailLogo = 'https://cdn.icon-icons.com/icons2/2631/PNG/512/gmail_new_logo_icon_159149.png';
  const facebookLogo = 'https://cdn.icon-icons.com/icons2/555/PNG/512/facebook_icon-icons.com_53612.png';
  const instagramLogo = 'https://cdn.icon-icons.com/icons2/1753/PNG/512/iconfinder-social-media-applications-3instagram-4102579_113804.png';
  const twitterLogo = 'https://cdn.icon-icons.com/icons2/122/PNG/512/twitter_socialnetwork_20007.png';
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes hacer la lógica de registro, como enviar los datos al servidor
    // o realizar validaciones.
    console.log('Nombre:', name);
    console.log('Email:', email);
    console.log('Contraseña:', password);
  };

  return (
   
    <div className="d-flex">
       
    <div className='registration-form-container'>
    <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={handleNameChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Registrarse
        </Button>
        
      </Form>
      <div className="social-login-buttons">
        <p>O inicia sesión con:</p>
        <div className='d-flex justify-content-center flex-wrap'>
        <Button className="social-button gmail box-img d-flex justify-content-center" variant="outline-primary">
          <img src={gmailLogo} alt="Gmail" />
          Gmail
        </Button>
        <Button className="social-button facebook box-img d-flex justify-content-center" variant="outline-primary">
          <img src={facebookLogo} alt="Facebook" />
          Facebook
        </Button>
        <Button className="social-button instagram box-img d-flex justify-content-center" variant="outline-primary">
          <img src={instagramLogo} alt="Instagram" />
          Instagram
        </Button>
        <Button className="social-button twitter box-img d-flex justify-content-center" variant="outline-primary">
          <img src={twitterLogo} alt="Twitter" />
          Twitter
        </Button>
        </div>
      
      </div>
    </div>
    <div className='img-bg'>
      <img className='img-luigi' src="https://res.cloudinary.com/dol1ba0ld/image/upload/v1692601369/image-removebg-preview_55_vy6twe.png" alt="" />
      <img src="https://img.freepik.com/vector-premium/viejo-videojuego-estilo-retro-fondo-vector-ilustracion_230920-1786.jpg" alt="" />
    </div>
    </div>
  );
};

export default Registro;
