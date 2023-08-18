export const administrador = async () => {
    try{
        const respuesta = await fetch("http://localhost:3004/juegos");
        const listadejuegos = await respuesta.json();
        const respuesta2 = await fetch("http://localhost:3004/categorias");
        const listacategorias = await respuesta2.json();
        return listadejuegos
        
    }
    catch(error){
    }
}

