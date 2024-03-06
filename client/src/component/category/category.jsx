import React, { useEffect, useState } from "react";
import "./category.css";
import { MagicMotion } from "react-magic-motion";

import menuData from "../../data/menu.json";
import Card from "../card/card";

export default function Category({ name, data }) {
  //const [category, setCategory] = useState([]);

  const [isOpen, setIsOpen] = useState(false);

  const allGroup = data.filter((e) => e.group === name);
  const category = [...new Set(allGroup.map((item) => item.category))];

  return (
    <MagicMotion
      transition={{ type: "spring", stiffness: 180, damping: 20, mass: 1.1 }}
    >
      <div className="box_category">
        <button className="boton_category" onClick={() => setIsOpen(!isOpen)}>
          <h2 className="name_select">{name}</h2>

          <svg
            key="exclude"
            style={{
              transform: `rotate(${isOpen ? 180 : 0}deg)`,
              transition: "320ms ease-in-out",
            }} 
            width="20"
            height="20"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.5 10L15.6714 21L27.5 10"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {isOpen && (
          <div
            style={{
              gap: "1rem",
              display: "flex",
              flexDirection: "column",
              marginTop: "1rem",
            }}
          >
            <div className="container">
              <article className="container_article">
                {category.map((e, index) => (
                  <div key={index}>
                    <h2 className="category_subtitulo">{e}</h2>
                    <Card key={index} category={e} data={data} />
                  </div>
                ))}
              </article>
            </div>
          </div>
        )}
      </div>
    </MagicMotion>
  );
}