/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

export const ImgComponent = ({direccion,mensaje}) => {
  return (
    <>
        <img src={direccion} alt={mensaje} />
    </>
  )
}
