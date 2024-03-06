import React from "react";
import "./card.css";
import patitas from "../../img/comida/patitas.png";

export default function Card({ category, data, id }) {
  const getCategory = data.filter((e) => {
    if (id) {
      return e.id === id;
    }
    if (category) {
      return e.category === category;
    }
    return false;
  });

  const img = true;

  function handleImageClick(event) {
    event.currentTarget.parentElement.classList.toggle("expand_img");
  }

  return (
    <>
      {getCategory.map((e) => {
        return (
          <div className="card">
            <div className="div_product1">
              <h1>{e.nombre.toUpperCase()}</h1>
              <h2>{e.descripcion}</h2>
              <div className="precio">
                {Object.entries(e.precio).map(([nombre, valor]) => (
                  <h1 key={nombre}>
                    {nombre} $ {valor}.
                  </h1>
                ))}
              </div>
            </div>
            {img && (
              <div className="div_product2">
                <div className="image_click" onClick={handleImageClick}>
                  <img
                    className="img_comida"
                    src={patitas}
                    alt="imagen de la comida"
                  />
                </div>
              </div>
            )}
          </div>
        );
      })}
    </>
  );
}
