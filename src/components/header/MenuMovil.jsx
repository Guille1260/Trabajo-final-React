/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom';
export const MenuMovil = () => {
  return (
    <>
        <button className="btn btn-menu" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
            <i className="fa-solid fa-bars-staggered"></i>
        </button>

        <div className="offcanvas offcanvas-start conteiner-menu-movil" data-bs-scroll="true" data-bs-backdrop="false" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
            <div className="offcanvas-header menu-movil-header">
                <h5 className="offcanvas-title" id="offcanvasScrollingLabel">MENU</h5>
                <button type="button" className="btn btn-equis" data-bs-dismiss="offcanvas" aria-label="Close"><i className="fa-solid fa-xmark"></i></button>
            </div>
            <div className="offcanvas-body menu-movil-cuerpo">
                <li><Link className="links-menu" to={'/productos/todos'}>Productos</Link></li>
                <li><Link className="links-menu" to={'/productos/notebooks'}>Notebooks</Link></li>
                <li><Link className="links-menu" to={'/productos/componentes'}>Componentes</Link></li>
                <li><Link className="links-menu" to={'/productos/perifericos'}>Perifericos</Link></li>
                <li><Link className="links-menu" to={'/ayuda'}>Ayuda</Link></li>
            </div>
        </div>
    </>
  )
}
