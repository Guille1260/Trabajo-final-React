/* eslint-disable no-unused-vars */
import React from 'react'
import { SuperiorFooter } from './SuperiorFooter'
import { MedioFooter } from './MedioFooter'
import { InferiorFooter } from './InferiorFooter'

export const MainFooter = () => {
  return (
    <>
         <footer className="conteiner-footer">
            <SuperiorFooter/>
            <MedioFooter/>
            <InferiorFooter/>
          </footer>
    </>
  )
}
