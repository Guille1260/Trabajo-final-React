/* eslint-disable no-unused-vars */
import React from 'react'

export const OfertasHeader = () => {
  return (
    <>
        <div className="conteiner-ofertas">
            <button className="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">   
                <h5>&#128526; Conoce nuestras ofertas &#128526;<i className="fa-solid fa-chevron-down"></i></h5>
                {/* ---- &#128123; Envio gratis desde $99,999 &#128123; */}
            </button>
            <div className="offcanvas offcanvas-top desplegable-top"  id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
                <div className="offcanvas-header">
                    <button type="button" className="btn btn-equis" data-bs-dismiss="offcanvas" aria-label="Close"><i className="fa-solid fa-xmark"></i></button>
                </div>
                <div className="offcanvas-body desplegable-top-body" >
                    <article className="conteiner-cuotas">
                        <h5>&#128526; 3 y  6 cuotas sin interes &#128526;</h5>
                        <p>
                            Lorem, ipsum dolor 
                        </p>
                    </article>
                    <article className="conteiner-envios ">
                        <h5>&#128123; Envio gratis desde $99,999 &#128123;</h5>
                        <p>
                            Lorem, ipsum 
                        </p>
                    </article>
                </div>
            </div>
        </div>
    </>
  )
}
