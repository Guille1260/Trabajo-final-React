/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'

export const Cuenta = () => {
  // sirve para reposicionar la pagina
  useEffect(() => {
      window.scrollTo(0, 0);
  }, []);
  return (
    <>
        <main className="conteiner-main">
          <h1>loggin</h1>
        </main>
    </>
  )
}
