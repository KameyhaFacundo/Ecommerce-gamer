const uriUsuario = import.meta.env.VITE_API_USUARIO;

export const login = async (usuario) => {
  try {
    const respuesta = await fetch(uriUsuario);
    const listaUsuarios = await respuesta.json();

    const usuarioBuscado = listaUsuarios.find(
      (itemUsuario) => itemUsuario.email === usuario.email
    );
    if (usuarioBuscado) {
      if (usuarioBuscado.password === usuario.password) {
        return usuarioBuscado;
      } else {
        return null;
      }
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
  }
};

const fetchData = async (url) => {
    try {
      const respuesta = await fetch(url);
      const datos = await respuesta.json();
      return datos;
    } catch (error) {
      console.error("Error:", error);
    }
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
