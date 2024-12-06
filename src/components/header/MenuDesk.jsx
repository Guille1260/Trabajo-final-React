/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom';
export const MenuDesk = () => {
  return (
    <>
        <nav className="conteiner-menu">
            <ul className="menu">
              <li><Link className="links-menu" to={'/productos/todos'}>Productos</Link></li>
              <li><Link className="links-menu" to={'/productos/notebooks'}>Notebooks</Link></li>
              <li><Link className="links-menu" to={'/productos/componentes'}>Componentes</Link></li>
              <li><Link className="links-menu" to={'/productos/perifericos'}>Perifericos</Link></li>
              <li><Link className="links-menu" to={'/ayuda'}>Ayuda</Link></li>
            </ul>
        </nav>
    </>
  )
}
