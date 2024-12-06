/* eslint-disable no-unused-vars */
import React from 'react'
import { FiltroUsado } from './FiltroUsado'
import { FiltroCategorias } from './FiltroCategorias'

export const FiltroDesk = () => {
  return (
    <>
        <article className="conteiner-filtro-desk">
            <FiltroUsado/>
            <FiltroCategorias/>
        </article>
    </>
  )
}
