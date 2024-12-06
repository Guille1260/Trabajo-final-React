/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

export const FiltroCategorias = () => {
  return (
    <>  
        <article className="conteiner-filtros-categorias">
            <article className="conteiner-titulo">
                    <h4>Categorias</h4>
            </article>
            <article className="conteiner-categorias-filtro">
              <ul className='menu-filtros'>
                <li className='nav-item'><Link className="links-menu" to={'/productos/notebooks'}><button className='btn'>Notebooks</button></Link></li>
                <li className='nav-item'><Link className="links-menu" to={'/productos/procesadores'}><button className='btn'>Procesadores</button></Link></li>
                <li className='nav-item'><Link className="links-menu" to={'/productos/mothers'}><button className='btn'>Mothers</button></Link></li>
                <li className='nav-item'><Link className="links-menu" to={'/productos/placavideo'}><button className='btn'>Placas de video</button></Link></li>
                <li className='nav-item'><Link className="links-menu" to={'/productos/mouse'}><button className='btn'>Mouse</button></Link></li>
                <li className='nav-item'><Link className="links-menu" to={'/productos/ram'}><button className='btn'>RAM</button></Link></li>
                
                
              </ul>
              
              
              
              
              
              
                  
            </article>
        </article>
    
    </>
  )
}
