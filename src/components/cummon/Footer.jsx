import { Navbar, Container, Nav, Button } from "react-bootstrap";
import React from "react";
import "./Footer.css"
function Footer() {
  return (
    <footer className="bg-dark text-light py-4 text-center container-fluid">
      <div className="d-flex row">
        <section className="col-12 col-lg-4 col-sm-12 mb-4">
          <img className="w-50"
            src="https://res.cloudinary.com/dol1ba0ld/image/upload/v1692860070/asd/image-removebg-preview_58_gqj88c.png"
            alt="logo"
          />
        </section>
        <section className="col-12 col-lg-4 col-sm-6 mt-2" >
          <ul className="navbar-nav">
            <li className="nav-item"><p><a className="nav-link" href="#">
                Terminos y Condiciones
              </a></p>
            </li>
            <li className="nav-item"><p><a className="nav-link" href="#">
                Politica y Privacidad
              </a></p>
            </li>
            <li className="nav-item"><p><a className="nav-link" href="#">
                Contacto
              </a></p>
            </li>
            <li className="nav-item"><p><a className="nav-link" href="#">
                FAQ
              </a></p>
              
            </li>
          </ul>
        </section>
        <section className="col-12 col-lg-4 col-sm-6 mb-4">
          <article className="d-flex justify-content-center">
            <ul className="list-inline d-flex flex-wrap justify-content-center ">
              <li className="nav-item social-logo mx-2">
                <a className="nav-link mx-2" href="#">
                  <img
                    src="https://www.instant-gaming.com/themes/igv2/images/icons/socials/icon-dcr.svg"
                    alt="discord-logo"
                  />
                </a>
              </li>
              <li className="nav-item social-logo mx-2">
                <a className="nav-link mx-2" href="#">
                  <img
                    src="https://www.instant-gaming.com/themes/igv2/images/icons/socials/icon-tw.svg"
                    alt="twitter-logo"
                  />
                </a>
              </li>
              <li className="nav-item social-logo mx-2">
                <a className="nav-link mx-2" href="#">
                  <img
                    src="https://www.instant-gaming.com/themes/igv2/images/icons/socials/icon-igr.svg"
                    alt="instagram-logo"
                  />
                </a>
              </li>
              <li className="nav-item social-logo mx-2">
                <a className="nav-link mx-2" href="#">
                  <img
                    src="https://www.instant-gaming.com/themes/igv2/images/icons/socials/icon-fb.svg"
                    alt="facebook-logo"
                  />
                </a>
              </li>
              <li className="nav-item social-logo mx-2">
                <a className="nav-link mx-2" href="#">
                  <img
                    src="https://www.instant-gaming.com/themes/igv2/images/icons/socials/icon-yt.svg"
                    alt="youtube-logo"
                  />
                </a>
              </li>
              <li className="nav-item mx-2 social-logo">
                <a className="nav-link mx-2" href="#">
                  <img
                    src="https://www.instant-gaming.com/themes/igv2/images/icons/socials/icon-tch.svg"
                    alt="twitch-logo"
                  />
                </a>
              </li>
              <li className="nav-item social-logo mx-2">
              <a className="nav-link mx-2" href="#">
                  <img
                    src="https://www.instant-gaming.com/themes/igv2/images/icons/icon-extension.svg"
                    alt="googlestore-logo"
                  />
                </a>
              </li>
            </ul>
          </article>
          <article className="d-flex justify-content-center">
            <ul className="list-inline">
              <li className="my-4"> <a href="#">
              <img className="img-download"
                src="https://gaming-cdn.com/themes/igv2/modules/footer/images/apple.svg"
                alt="apple-download"
              />
            </a></li>
              <li className="my-4"> <a href="#">
              <img className="img-download"
                src="https://gaming-cdn.com/themes/igv2/modules/footer/images/android.svg"
                alt="playstore-download"
              />
            </a></li>
            </ul>
           
           
          </article>
        </section>
      </div>
      <div>
        <p>&copy; Todos los derechos reservados</p>
      </div>
    </footer>
  );
}

export default Footer;
