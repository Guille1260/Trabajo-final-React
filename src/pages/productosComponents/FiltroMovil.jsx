/* eslint-disable no-unused-vars */
import React from 'react'
import { FiltroUsado } from './FiltroUsado'
import { FiltroCategorias } from './FiltroCategorias'

export const FiltroMovil = () => {
  return (
    <>
        <article className="conteiner-filtro-movil">
            <button className="btn " type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                  <i className="fa-solid fa-filter"></i>Filtro
            </button>
            <div className="collapse" id="collapseExample">
                <FiltroUsado/>
                <FiltroCategorias/>
            </div>
        </article>
    </>
  )
}
