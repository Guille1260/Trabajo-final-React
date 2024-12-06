/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { db, collection, addDoc } from '../firebase/firebase'; 
const DetalleCompra = () => {
  const location = useLocation(); 
  const [order, setOrder] = useState(null);
  const [orderId, setOrderId] = useState(null);  

  useEffect(() => {
    window.scrollTo(0, 0);
    if (location.state && location.state.order) {
      setOrder(location.state.order);
      agregarOrdenAFirestore(location.state.order);
    }
  }, [location]);

  const agregarOrdenAFirestore = async (orden) => {
    try {
      const ordersRef = collection(db, 'orders');
      
      const docRef = await addDoc(ordersRef, {
        orderNumber: orden.orderNumber,
        total: orden.total,
        products: orden.products,
        fecha: new Date(),  
        estado: 'Pendiente',  
      });

      setOrderId(docRef.id);
      console.log('Orden agregada con ID:', docRef.id); 

    } catch (error) {
      console.error('Error al agregar la orden a Firestore:', error);
    }
  };

  if (!order) {
    return <p>Cargando detalles de la compra...</p>;
  }

  
  const totalGeneral = order.products.reduce((total, product) => {
    return total + (product.precio * product.quantity);
  }, 0);

  return (
    <main className="conteiner-main" id="detalles">
      <div>
        <h2>Detalles de la Compra</h2>
        {orderId && (
          <div>
            <p><strong>ID de la Orden :</strong> {orderId}</p>
          </div>
        )}
     
        <p><strong>Total:</strong> {new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(totalGeneral)}</p>
        
        <ul>
          {order.products.map((product) => {
            const subtotal = product.precio * product.quantity;  // Calcular subtotal de cada producto

            return (
              <li key={product.id}>
                <span>
                  
                  <strong>ID del Producto:</strong> {product.id} <br />
                  <strong>Nombre:</strong> {product.titulo} <br />
                  <strong>Cantidad:</strong> {product.quantity} <br />
                  <strong>Precio Unitario:</strong> {new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(product.precio)} <br />
                  <strong>Subtotal:</strong> {new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(subtotal)} <br />
                </span>
              </li>
            );
          })}
        </ul>
        
        
      </div>
    </main>
  );
};

export default DetalleCompra;
