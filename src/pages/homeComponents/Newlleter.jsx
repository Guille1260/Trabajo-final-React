/* eslint-disable no-unused-vars */
import React from 'react'

export const Newlleter = () => {
  return (
    <>
        <section className="seccion-Newsletter">
            <article className="conteiner-titulo">
            <h2>Newsletter</h2>
            </article>
            <div className="conteiner-Newsletter">
            <article className="conteiner-titulo-descripccion">
                <h3>Computer</h3>
                <p>
                Registrate para recibir notificaciones de nuevos lanzamientos,
                información sobre nuestros productos, sorteos, promociones y mucho
                más!
                </p>
            </article>
            <article className="conteiner-fromulario">
                <div className="conteiner-cuerpo">
                <form action="" id="Newsletter-home">
                    <div className="mb-3">
                    <i className="fa-solid fa-envelope icono-formulario"></i>{" "}
                    <input
                        type="email"
                        name="email"
                        id="email-suscribirse"
                        className="correo-new2"
                        placeholder="Email"
                    />
                    </div>

                    <button type="submit" className="btn-enviar" id="Suscribirse">
                    Suscribirse
                    </button>
                </form>
                </div>
            </article>
            </div>
        </section>
    </>
  )
}
