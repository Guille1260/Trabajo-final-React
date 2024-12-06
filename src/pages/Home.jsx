/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import { Carrusel } from './homeComponents/Carrusel'
import { Destacados } from './homeComponents/Destacados'
import { Categorias } from './homeComponents/Categorias'
import { Somos } from './homeComponents/Somos'
import { Newlleter } from './homeComponents/Newlleter'

export const Home = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
        <main className="conteiner-main" id='Home'>
          <Carrusel/>
          <Destacados/>
          <Categorias/>
          <Somos/>
          <Newlleter/>
        </main>
    </>
  )
}
