/* eslint-disable no-unused-vars */
import React from 'react'
import { Link, useParams } from 'react-router-dom';

export const FiltroUsado = () => {
  const { id } = useParams();
  return (
    <>
        <article className="conteiner-filtros-utilizados">
            <article className="conteiner-titulo">
                    <h4>Filtrado por</h4>
                    
            </article>
            <article className="conteiner-filtro-selecionado">
                  <p id="parrafo1" className="texto-filto">
                    {id}
                  </p>
            </article>
            <article className="conteiner-limpiar">
              <Link className="links-menu" to={'/productos/todos'}>
                <button className='btn limpiar'>
                  Limpiar Filtro
                </button>
              </Link>
            </article>
        </article>
    </>
  )
}
