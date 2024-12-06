/* eslint-disable no-unused-vars */
import React from 'react'

export const OdenarTarjetas = () => {
  return (
    <>
        <div className="sort-by-container ordenar">
            <label  className="filter-by-sort col-md-3 col-sm-12 col-xs-12 clear font-weight-normal">Ordenar por:</label>
            <div className="col-md-3 col-sm-12 col-xs-12 clear">
                <select id="sort" className="sort-by">
                    <option value="price-ascending" selected="" id="menorAmayor" >Precio: Menor a Mayor</option>
                    <option value="price-descending" id="mayorAmenor" >Precio: Mayor a Menor</option>
                    
                </select>
            </div> 
        </div>
    </>
  )
}
