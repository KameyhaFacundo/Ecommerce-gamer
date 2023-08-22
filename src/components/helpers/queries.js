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

  export const listarJuegosStorage = async () => {
    return fetchData("http://localhost:3004/juegosStorage");
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

  export const obtenerJuego = async (id) => {
    try {
      console.log(id)
      const resp = await fetch("http://localhost:3004/juegos/"+id);
      const data = await resp.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  export const editarJuego = async (id, juegoEditado) => {
    try {
      const resp = await fetch("http://localhost:3004/juegos/"+id, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(juegoEditado),
      });
      return resp;
    } catch (error) {
      console.log(error);
    }
  };

  export const eliminarJuego = async (id) => {
    try {
      const resp = await fetch(`http://localhost:3004/juegos/${id}`, {
        method: 'DELETE',
      });
      return resp;
    } catch (error) {
      console.log(error);
    }
  };