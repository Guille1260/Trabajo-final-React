/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../productosComponents/ProductCard';

import { db, collection, getDocs } from '../../firebase/firebase'; // Ajusta la ruta según corresponda

export const Destacados = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productsCollection = collection(db, "productos"); 
      const productSnapshot = await getDocs(productsCollection); 
      const productList = productSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })); 
      setProducts(productList);
    };

    fetchProducts(); 
    window.scrollTo(0, 0); 
  }, []); 

  return (
    <>
      <section className="conteiner-destacados">
        <article className="conteiner-titulo">
          <h1>Productos destacados</h1>
        </article>
        <section className="conteiner-tarjetas" id="conteiner-tarjetas">
          {
            products
              .filter(product => product.destacado === true) 
              .map((product) => (
                <ProductCard product={product} key={product.id} />
              ))
          }
        </section>
        <section className="conteiner-boton">
          <Link className="links-menu" to={'/productos/todos'}>
            <button type="button" className="vermas">Ver Mas</button>
          </Link>
        </section>
      </section>
    </>
  );
};
