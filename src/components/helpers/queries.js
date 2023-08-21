const fetchData = async (url) => {
    try {
      const respuesta = await fetch(url);
      const datos = await respuesta.json();
      return datos;
    } catch (error) {
      console.error("Error:", error);
    }
  };
  
  export const listarUsuarios = async () => {
    return fetchData("http://localhost:3004/usuarios");
  };

  export const listarJuegos = async () => {
    return fetchData("http://localhost:3004/juegos");
  };
  
  export const listarCategorias = async () => {
    return fetchData("http://localhost:3004/categorias");
  };
  
  export const listarProcesadores = async () => {
    return fetchData("http://localhost:3004/procesadores");
  };
  
  export const listarSistemasOperativos = async () => {
    return fetchData("http://localhost:3004/sistemasOperativos");
  };
  
  export const listarTarjetasGraficas = async () => {
    return fetchData("http://localhost:3004/tarjetasGraficas");
  };
  


  export const crearJuego = async (juego) => {
    try {
      const resp = await fetch("http://localhost:3004/juegos", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(juego),
      });
  
      return resp;
    } catch (error) {
      console.log(error);
    }
  };

  export const crearUsuario = async (Usuario) => {
    try {
      const resp = await fetch("http://localhost:3004/usuarios", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(Usuario),
      });
  
      return resp;
    } catch (error) {
      console.log(error);
    }
  };