/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
export const MapaFooter = () => {
  return (
    <>
        <article className="informacion conteiner-mapa">
                <div className="conteiner-titulo">
                <h4>Mapa del sitio</h4>
                </div>
                <div className="conteiner-cuerpo">
                <ul className="mapa navbar-nav me-auto mb-2 mb-lg-0 ">
                    <li className="nav-item">
                            <Link className="nav-link" to={'/productos/todos'}>Productos</Link>
                    </li>
                    <li className="nav-item">
                            <Link className="nav-link" to={'/productos/notebooks'}>Notebooks</Link>
                    </li>
                    <li className="nav-item">
                            <Link className="nav-link" to={'/productos/componentes'}>Componentes</Link>
                    </li>
                    <li className="nav-item">
                            <Link className="nav-link" to={'/productos/perifericos'}>Perifericos</Link>
                    </li>
                    <li className="nav-item">
                            <Link className="nav-link" to={'/ayuda'}>ayuda</Link>
                    </li>
                </ul>
                </div>
        </article>
    </>
  )
}
