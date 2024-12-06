/* eslint-disable no-unused-vars */
import React from 'react'
import { PagosFooter } from './PagosFooter'
import { EnviosFooter } from './EnviosFooter'
import { RedesFooter } from './RedesFooter'
import { MapaFooter } from './MapaFooter'
import { FormularioFooter } from './FormularioFooter'
import { ContactoFooter } from './ContactoFooter'

export const MedioFooter = () => {
  return (
    <>
        <article className="medio">
            <div className="conteiner-mid">
                <PagosFooter/>
                <EnviosFooter/>
                <RedesFooter/>
                <MapaFooter/>
                <FormularioFooter/>
                <ContactoFooter/>
                
            </div>
        </article>
    </>
  )
}
