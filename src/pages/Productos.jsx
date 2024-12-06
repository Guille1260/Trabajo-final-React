/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { FiltroMovil } from './productosComponents/FiltroMovil';
import { FiltroDesk } from './productosComponents/FiltroDesk';
import { OdenarTarjetas } from './productosComponents/OdenarTarjetas';
import ProductCard from './productosComponents/ProductCard';
import { useParams } from 'react-router-dom';

import { db, collection, getDocs } from '../firebase/firebase'; 

export const Productos = () => {
  const [products, setProducts] = useState([]); 
  const [loading, setLoading] = useState(true);  
  const { id } = useParams();  
  useEffect(() => {
    const fetchProducts = async () => {
      const productsCollection = collection(db, "productos");
      const productSnapshot = await getDocs(productsCollection); 
      const productList = productSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setProducts(productList);  
      setLoading(false); 
    };

    fetchProducts(); 
    window.scrollTo(0, 0); 
  }, []); 

  const filteredProducts = products.filter(product => id === "todos" || product.categorias.includes(id));

  if (loading) {
    return (
      <div className="loading">
        <h2>Cargando productos...</h2>
      </div>
    );
  }

  return (
    <>
      <main className="conteiner-main" id='productos'>
        <section className="conteiner-titulox">
          <h1>{id}</h1>
        </section>
        <section className="conteiner-productos">
          <aside className="conteiner-filtros">
            <FiltroMovil />
            <FiltroDesk />
          </aside>
          <section className="conteiner-tarjetas-ordenar">
            <article className="conteiner-ordenar">
              <OdenarTarjetas />
            </article>
            <article className="conteiner-tarjetas">
              {filteredProducts.length === 0 ? (
                <h3>No hay productos disponibles</h3>
              ) : (
                filteredProducts.map((product) => (
                  <ProductCard product={product} key={product.id} />
                ))
              )}
            </article>
          </section>
        </section>
      </main>
    </>
  );
};
