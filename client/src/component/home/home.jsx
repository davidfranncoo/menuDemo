import React, { useEffect, useState } from "react";
import buscador from "../../icon/buscador.png";
import Category from "../category/category";
import Nav from "../nav/nav";
import menuData from "../../data/menu.json";
import Card from "../card/card";
import eliminar from "../../icon/eliminar.png";

import { MagicMotion } from "react-magic-motion";

import "./home.css";

export default function Home() {
  const [menu, setMenu] = useState([]);
  const [grupo, setGrupo] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [encontro, setEncontro] = useState([]);

  useEffect(() => {
    // Simulación de carga de datos desde el archivo JSON
    setMenu(menuData);
    if (menu) {
      const uniqueGrup = [...new Set(menu.map((item) => item.group))];
      setGrupo(uniqueGrup);
    }
  }, [menu]);
  function hardlerChange(e) {
    e.preventDefault();
    const valor = e.target.value.toLowerCase();
    setBusqueda(valor);
 
    const info = menu.filter((item) =>
      item.nombre.toLowerCase().includes(valor)
    );
    setEncontro(info);
  }
  function handlerDelete(e) {
    e.preventDefault();
    setBusqueda("");
    setEncontro([]);
  }

  return (
    <div className="home">
      <Nav />

      <main className="main">
        <div className="form_search">
          <input
            value={busqueda}
            placeholder="¿Qué quieres buscar?..."
            onChange={(e) => hardlerChange(e)}
          ></input>
          <button className="eliminar_buttom" onClick={handlerDelete}>
            <img className="eliminar_img" src={eliminar} alt="eliminar" />
          </button>
        </div>

        {busqueda ? (
          encontro.length > 0 ? (
              <MagicMotion>
            <div className="box_busqueda">

              {encontro.map((e, index) => {
                return <Card key={index} id={e.id} data={encontro} />;
              })}
            </div>
              </MagicMotion>
          ) : (
            <h1>NO HAY COINCIDENCIA</h1>
          )
        ) : (
          <>
            {grupo ? (
              grupo.map((e, index) => (
                <Category name={e} key={index} data={menu} />
              ))
            ) : (
              <h1>cargando</h1>
            )}
          </>
        )}
        <div className="form_search">
        
          
        </div>
      </main>
    </div>
  );
}
