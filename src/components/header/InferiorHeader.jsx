/* eslint-disable no-unused-vars */
import React from 'react'
import { Busqueda } from './Busqueda'
import { MenuDesk } from './MenuDesk'

export const InferiorHeader = () => {
  return (
    <>
        <div className="conteiner-inferior">
            <Busqueda/>
            <MenuDesk/>

        </div>
        
    </>
  )
}
