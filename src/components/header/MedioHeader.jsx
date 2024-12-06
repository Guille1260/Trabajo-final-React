/* eslint-disable no-unused-vars */
import React from 'react'
import { ImgComponent } from '../general/ImgComponent'
import { MenuMovil } from './MenuMovil'
import { Busqueda } from './Busqueda'
import { Carrito } from './Carrito'
import { Link } from 'react-router-dom'

export const MedioHeader = () => {
  return (
    <>
        <div className="conteiner-medio">
            <article className="conteiner-logo">
                <Link to={'/'} className='logo'>
                    <ImgComponent direccion={"https://img.freepik.com/vetores-gratis/modelo-de-logotipo-de-computador-criativo_23-2149213537.jpg"} mensaje={"LOGO"}/> 
                </Link>
                <MenuMovil/>
            </article>
            <article className="conteiner-buscador">
                <Busqueda/>
                <Link to={'/'} title="Ir a home">
                    <ImgComponent direccion={"https://img.freepik.com/vetores-gratis/modelo-de-logotipo-de-computador-criativo_23-2149213537.jpg"} mensaje={"LOGO"} /> 
                </Link>
            </article>
            <article className="conteiner-botones-icon">
                <article className="conteiner-usuario">
                    <Link className="links-menu" to={'/loggin'}> 
                        <i className="fa-solid fa-user"></i>
                        <span>MI CUENTA</span>
                    </Link>
                </article>
                <article className="conteiner-carrito">
                        <Carrito/>
                </article>
            </article>
        </div>
    </>
  )
}
