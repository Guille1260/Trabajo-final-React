/* eslint-disable no-unused-vars */
import React from 'react'

export const Carrusel = () => {
  return (
    <>
        <section className="conteiner-carrucel">
            <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src="https://imagenes.compragamer.com/bannerPrincipal/DC_20241022151949_kdqhRLmI.jpg" className="d-block w-100" alt="..."/>
                
                </div>
                <div className="carousel-item">
                <img src="https://imagenes.compragamer.com/bannerPrincipal/DC_20241022151949_kdqhRLmI.jpg" className="d-block w-100" alt="..."/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
        </section>
    </>
  )
}
