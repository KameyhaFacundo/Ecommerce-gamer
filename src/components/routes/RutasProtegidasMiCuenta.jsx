import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import MiCuenta from '../view/MiCuenta'
import ListaDeDeseos from '../view/ListaDeDeseos'

function RutasProtegidasMiCuenta({usuarioActivo}) {
 
    return (
        <Routes>
            <Route exact path="/" element={<MiCuenta usuarioActivo={usuarioActivo} ></MiCuenta>}></Route>
              <Route exact path="/lista-de-deseos/:idUsuarioActivo" element={<ListaDeDeseos></ListaDeDeseos>}></Route>
        </Routes>
      )
}

export default RutasProtegidasMiCuenta