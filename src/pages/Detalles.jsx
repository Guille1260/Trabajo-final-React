/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebase';
import { useCart } from '../context/CartContext';  // Asegúrate de que el contexto esté importado

export const Detalles = () => {
  const [products, setProducts] = useState([]); // Estado para almacenar productos
  const [loading, setLoading] = useState(true); // Estado para manejar el loading
  const { id } = useParams(); // Obtener el ID del producto desde la URL
  const { addToCart } = useCart(); // Accede a la función addToCart del contexto
  
  const añadirCarrito = (e) => {
    e.preventDefault(); 
    if (filteredProduct) {
      addToCart(filteredProduct); // Llama a la función addToCart y pasa el producto filtrado
      console.log('Producto agregado al carrito:', filteredProduct); // Verificar en consola que el producto se ha agregado
    }
  };

  useEffect(() => {
    // Obtener los productos desde Firestore
    const fetchProducts = async () => {
      const productsCollection = collection(db, "productos"); // Accede a la colección "productos"
      const productSnapshot = await getDocs(productsCollection); // Obtiene todos los documentos
      const productList = productSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })); // Extrae los datos
      setProducts(productList); // Guarda los productos en el estado
      setLoading(false); // Desactiva el loading después de obtener los productos
    };

    fetchProducts(); // Llama a la función para obtener los productos
    window.scrollTo(0, 0); // Mueve la ventana a la parte superior
  }, []); 

  // Filtrar el producto según el ID
  const filteredProduct = products.find(product => product.id === id);

  // Si no se encuentra el producto, mostrar un mensaje de carga o no encontrado
  if (loading) {
    return (
      <div className="loading">
        <h2>Cargando...</h2>
      </div>
    );
  }

  if (!filteredProduct) {
    return <h3>Producto no encontrado</h3>;
  }

  return (
    <>
      <main className="conteiner-main" id="detalles">
        <section className="imagen-producto">
          <img src={filteredProduct.imagen} alt={filteredProduct.titulo} />
        </section>
        <section className="informacion-producto">
          <article className="conteiner-navegacion">
            {filteredProduct.titulo}
          </article>
          <article className="conteiner-titulo-producto">
            descripcion <br />
            {filteredProduct.descripcion}
          </article>
          <article className="conteiner-precio">
            Precio del producto:{" "}
            {new Intl.NumberFormat("es-AR", {
              style: "currency",
              currency: "ARS",
            }).format(parseFloat(filteredProduct.precio))}
          </article>
          <article className="conteiner-cuotas-precio">
            cuotas : <br />
            3 de {((parseFloat(filteredProduct.precio) * 0.1)+(parseFloat(filteredProduct.precio) )/ 3)} <br />
            6 de {((parseFloat(filteredProduct.precio) * 0.2)+(parseFloat(filteredProduct.precio) )/ 6)} <br />
            Precio de listas:{" "}
            {new Intl.NumberFormat("es-AR", {
              style: "currency",
              currency: "ARS",
            }).format(parseFloat(filteredProduct.precio) + 20000)}
          </article>
          <article className="conteiner-stock">
            disponibles: {filteredProduct.stock}
          </article>
          <article className="conteiner-boton">
            <Link className="links-menu" to="/productos/todos">
              <button>volver a productos</button>
            </Link>
            <button className="btn-agregar-carrito" onClick={añadirCarrito}>
              Agregar al carrito
            </button>
          </article>
        </section>
      </main>
    </>
  );
};
