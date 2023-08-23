import { Form, Button, Modal, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { login } from "../helpers/queries";

const Login = ({ showModal, handleCloseModal, setUsuarioActivo }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (usuario) => {
    console.log(usuario);
    login(usuario).then((respuesta) => {
      console.log(respuesta);
      if (respuesta) {
        Swal.fire(
          "Bienvenido " + respuesta.nombreUsuario,
          "Ingresaste a Tucu Gamer",
          "success"
        );
        handleCloseModal();
        setTimeout(() => {
          window.location.reload();
        }, 1000);
        var datosUsuario ={
          id: respuesta.id,
          rol: respuesta.rol
        }
        sessionStorage.setItem("usuarioLogeado", JSON.stringify(datosUsuario));
        console.log(respuesta.id);
        setUsuarioActivo(datosUsuario);
        // setUsuarioActivo(respuesta);
      } else {
        Swal.fire("Ocurrio un error", "Email o password incorrecto", "error");
      }
    });
  };

  return (
    <>
      <Modal
        show={showModal}
        size="lg"
        aria-labelledby="example-modal-sizes-title-lg"
        centered
      >
        <Modal.Header
          style={{
            backgroundColor: "#2727",
          }}
        >
          <div className="col-12 mt-5 mx-2 text-center">
            <img
              src="https://www.goeasytwitch.com/wp-content/uploads/2020/03/logov2.png"
              alt="logo"
            />
          </div>
        </Modal.Header>
        <Modal.Body
          style={{
            backgroundColor: "#272727",
            maxHeight: "100vh", // Establece la altura máxima en 100% del alto de la ventana
            overflow: "hidden", // Oculta cualquier scroll vertical
          }}
        >
          <Form
            onSubmit={handleSubmit(onSubmit)}
            className="p-4 my-4"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%", // Asegura que el formulario ocupe todo el espacio disponible
            }}
          >
            <Form.Group className="mb-3 text-white" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingrese un email"
                {...register("email", {
                  required: "El email es un dato obligatorio",
                  pattern: {
                    value: /^[\w\.-]+@[\w\.-]+\.\w+$/,

                    // /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                    message:
                      "El email debe cumplir con un formato valido como el siguiente mail@mail.com",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.email?.message}
              </Form.Text>
            </Form.Group>

            <Form.Group
              className="mb-3 text-white"
              controlId="formBasicPassword"
            >
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                {...register("password", {
                  required: "El password es un dato obligatorio",
                  pattern: {
                    value: /^[a-zA-Z0-9áéíóúñÁÉÍÓÚÑ]*$/,
                    //  /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/ ,
                    message:
                      "El password debe tener entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula.",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.password?.message}
              </Form.Text>
            </Form.Group>

            <Col xs="12">
              <div className="d-grid gap-2">
                <Button
                  style={{
                    backgroundColor: "#ff5400",
                    border: 0,
                  }}
                  type="submit"
                  size="lg"
                >
                  Ingresar
                </Button>
              </div>
            </Col>
          </Form>
          <Row className="justify-content-center mb-5">
            <Col xs="6" className="mt-2 text-center">
              <Link
                to={"/registro"}
                onClick={handleCloseModal}
                className=" my-4 fs-4 text-white link-hover"
                style={{ textDecoration: "none" }}
              >
                ¿No tienes una cuenta?
              </Link>
            </Col>
            <Col xs="6" className="mt-2 text-center">
              <Link
                className=" my-4 fs-4 text-white link-hover"
                style={{ textDecoration: "none" }}
              >
                ¿Has olvidado la contraseña?
              </Link>
            </Col>
          </Row>
          <section className="col-12">
            <article className="d-flex justify-content-center">
              <ul className="list-inline d-flex flex-wrap justify-content-center ">
                <li className="nav-item social-logo mx-2">
                  <Link className="nav-link mx-2" href="#">
                    <img
                      src="https://www.instant-gaming.com/themes/igv2/images/icons/socials/icon-dcr.svg"
                      alt="discord-logo"
                    />
                  </Link>
                </li>
                <li className="nav-item social-logo mx-2">
                  <Link className="nav-link mx-2">
                    <img
                      src="https://www.instant-gaming.com/themes/igv2/images/icons/socials/icon-tw.svg"
                      alt="twitter-logo"
                    />
                  </Link>
                </li>
                <li className="nav-item social-logo mx-2">
                  <Link className="nav-link mx-2" href="#">
                    <img
                      src="https://www.instant-gaming.com/themes/igv2/images/icons/socials/icon-igr.svg"
                      alt="instagram-logo"
                    />
                  </Link>
                </li>
                <li className="nav-item social-logo mx-2">
                  <Link className="nav-link mx-2" href="#">
                    <img
                      src="https://www.instant-gaming.com/themes/igv2/images/icons/socials/icon-fb.svg"
                      alt="facebook-logo"
                    />
                  </Link>
                </li>
                <li className="nav-item social-logo mx-2">
                  <Link className="nav-link mx-2" href="#">
                    <img
                      src="https://www.instant-gaming.com/themes/igv2/images/icons/socials/icon-yt.svg"
                      alt="youtube-logo"
                    />
                  </Link>
                </li>
                <li className="nav-item mx-2 social-logo">
                  <Link className="nav-link mx-2" href="#">
                    <img
                      src="https://www.instant-gaming.com/themes/igv2/images/icons/socials/icon-tch.svg"
                      alt="twitch-logo"
                    />
                  </Link>
                </li>
                <li className="nav-item social-logo mx-2">
                  <Link className="nav-link mx-2" href="#">
                    <img
                      src="https://www.instant-gaming.com/themes/igv2/images/icons/icon-extension.svg"
                      alt="googlestore-logo"
                    />
                  </Link>
                </li>
              </ul>
            </article>
            <article className="d-flex justify-content-center">
              <ul className="list-inline">
                <li className="my-4">
                  <Link>
                    <img
                      className="img-download"
                      src="https://gaming-cdn.com/themes/igv2/modules/footer/images/apple.svg"
                      alt="apple-download"
                    />
                  </Link>
                </li>
                <li className="my-4">
                  <Link>
                    <img
                      className="img-download"
                      src="https://gaming-cdn.com/themes/igv2/modules/footer/images/android.svg"
                      alt="playstore-download"
                    />
                  </Link>
                </li>
              </ul>
            </article>
          </section>
        </Modal.Body>
        <Modal.Footer
          style={{
            backgroundColor: "#272727",
          }}
        >
          <Button
            onClick={handleCloseModal}
            style={{
              backgroundColor: "#ff5400",
              border: 0,
            }}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Login;
