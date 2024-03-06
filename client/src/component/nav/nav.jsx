import React from "react";
import elipse from "../../img/Elipse.png";
import logo from "../../img/logo.png";
import facebook from "../../icon/facebook.png";
import instagram from "../../icon/instagram.png";
import ubicacion from "../../icon/ubicacion.png";
import compartir from "../../icon/compartir.png";
import whatsapp from "../../img/whatsapp1.png";

import "./nav.css";

export default function Nav() {
  const shareLink = async () => {
    try {
      await navigator.share({
        title: "Título de tu enlace compartido",
        url: "https://menu-r-46kq.vercel.app/", // Reemplaza con la URL de tu portafolio
      });
      console.log("Enlace compartido con éxito");
    } catch (error) {
      console.error("Error al compartir enlace:", error.message);
    }
  };

  return (
    <>
      <header className="header_wynwood">
        <img className="img_elipse" alt="elipse" src={elipse}></img>
        <h2 className="nav_paseo">RESTOBAR </h2>
        <img className="img_logo" src={logo} alt="imagen logo" />
        <div className="box_icon">
          <a
            className="icono_img"
            href="https://www.instagram.com/"
          >
            <img src={instagram} alt="Instagram" />
          </a> 
          <a
            className="icono_img"
            href="https://www.instagram.com/"
          >
            <img src={ubicacion} alt="ubicacin" />
          </a>
          <a
            className="icono_img"
            href="https://www.instagram.com/"
          >
            <img src={facebook} alt="facebook" />
          </a>
          <div className="icono_img" onClick={shareLink}>
            <img className="compartir_img" src={compartir} alt="Instagram" />
          </div>
        </div>
        <a
          className="whatsapp3d"
          href="https://www.instagram.com/"
        >
          <img src={whatsapp} alt="facebook" />
        </a>
      </header>
    </>
  );
}
