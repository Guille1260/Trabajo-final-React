/* eslint-disable no-unused-vars */
import React from 'react'
import { OfertasHeader } from './OfertasHeader'
import { MedioHeader } from './MedioHeader'
import { InferiorHeader } from './InferiorHeader'

export const MainHeader = () => {
  return (
    <>
      <header className="conteiner-header">
        <OfertasHeader/>
        <MedioHeader/>
        <InferiorHeader/>
      </header>
    </>
  )
}
