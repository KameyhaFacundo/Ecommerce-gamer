import React from 'react'
import CardProgramador from './programador/CardProgramador'

function AcercaDeNostros() {
  return (
   <>
      <div>
      <h1>Acerca De Nosotros</h1>
      <p>Somos un equipo apasionado comprometido a brindar soluciones creativas y efectivas para nuestros clientes.</p>
      <p>Nuestra misión es...</p>
      <ul>
        <li>Proporcionar productos y servicios de alta calidad que superen las expectativas de nuestros clientes.</li>
        <li>Cultivar un ambiente de trabajo colaborativo y enriquecedor para nuestro talentoso equipo.</li>
        <li>Contribuir positivamente a la comunidad a través de iniciativas y programas sociales.</li>
      </ul>
      <p>Valoramos...</p>
      <ul>
        <li>La innovación y la búsqueda constante de la excelencia.</li>
        <li>La integridad en todas nuestras interacciones.</li>
        <li>La diversidad y la inclusión como pilares de nuestra cultura.</li>
        <li>El aprendizaje continuo y el desarrollo personal y profesional.</li>
      </ul>
      <p>¡Gracias por visitar nuestra página y ser parte de nuestro viaje!</p>
    </div>
    <CardProgramador></CardProgramador>
    </>
  )
}

export default AcercaDeNostros