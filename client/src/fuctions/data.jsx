import React, { useEffect, useState } from "react";
import menuData from "../data/menu.json" 

function MenuComponent() {
  const [menu, setMenu] = useState([]);
  const [grupo, setGrupo] = useState([]);

  useEffect(() => {
    // Simulación de carga de datos desde el archivo JSON
    setMenu(menuData);  // Asegúrate de importar menuData desde algún lugar

    if (menu.length !== 0) {
      const uniqueGrup = [...new Set(menu.map(item => item.group))];
      setGrupo(uniqueGrup);
    }
  }, [menu]);

  console.log("esto es menu", menu);

  return (
    // JSX que renderiza tu componente
    <div>
      {/* Contenido de tu componente */}
    </div>
  );
}

export default MenuComponent;
