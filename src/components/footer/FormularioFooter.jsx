/* eslint-disable no-unused-vars */
import React from 'react'

export const FormularioFooter = () => {
  return (
    <>
        <article className="informacion conteiner-formulario">
            <div className="conteiner-titulo">
            <h4>Deja tu contacto</h4>
            </div>
            <div className="conteiner-cuerpo">
            <form action="" id="form-footer">
                <div className="mb-3">
                <i className="fa-solid fa-envelope"></i>
                <input
                    type="email"
                    name=""
                    id="email-footer"
                    className="correo-new"
                    placeholder="Email"
                />
                </div>
                <button
                type="submit"
                name=""
                className="btn-enviar"
                id="btn-enviar-footer"
                >
                Enviar
                </button>
            </form>
            </div>
        </article>
    </>
  )
}
