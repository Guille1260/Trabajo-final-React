/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext'; 

export const Carrito = () => {
  const { cart, removeFromCart, clearCart, addToCart } = useCart(); 
  const [errorMessage, setErrorMessage] = useState(''); 
  const [isErrorVisible, setIsErrorVisible] = useState(false);
  const navigate = useNavigate(); 

  const total = cart.reduce((acc, product) => acc + (product.precio * product.quantity), 0);

  
  const generateOrderNumber = () => {
    return `ORD-${Math.floor(Math.random() * 1000000)}`;
  };

  
  const handleBuy = () => {
    if (cart.length === 0) {
      setErrorMessage('Tu carrito está vacío. Agrega productos antes de realizar la compra.');
      setIsErrorVisible(true); 
    } else {
      const orderNumber = generateOrderNumber();
      const orderDetails = {
        orderNumber,
        total,
        products: cart,
      };

      
      clearCart();

     
      navigate('/detalleCompra', { state: { order: orderDetails } });
    }
  };

  
  const handleCloseErrorMessage = () => {
    setIsErrorVisible(false); 
  };

  
  const handleAddProduct = (product) => {
    addToCart(product); 
    setIsErrorVisible(false); 
  };

  return (
    <>
      <button className="btn btn-carrito" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
        <i className="fa-solid fa-cart-shopping"></i>
        <span className='contador-carrito'>{cart.length}</span>
      </button>

      <div className="offcanvas offcanvas-end desplegable-carrito" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div className="offcanvas-header header-carrito">
          <h5 className="offcanvas-title" id="offcanvasRightLabel">CARRITO</h5>
          <button type="button" className="btn btn-equis" data-bs-dismiss="offcanvas" aria-label="Close">
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        <div className="offcanvas-body cuerpo-carrito">
          {isErrorVisible && (
            <div className="error-message">
              <p>{errorMessage}</p>
              <button className="btn btn-ok" onClick={handleCloseErrorMessage}>OK</button>
            </div>
          )}

          {cart.length === 0 ? (
            <p>No hay productos en tu carrito</p>
          ) : (
            <ul>
              {cart.map((product) => (
                <li key={product.id} className="producto-carrito">
                  <img src={product.imagen} alt={product.titulo} width="50" />
                  <span>precio:{new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(product.precio)}</span>
                  <span>Cantidad: {product.quantity}</span>
                  <button onClick={() => removeFromCart(product.id)} className="btn btn-eliminar">
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className='footer'>
          <article className="conteiner-texto">
            <p className='texto-total'>
              Total: <span className='total'>{new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(total)}</span>
            </p>
          </article>
          <article className='conteiner-botones'>
            <button className='btn btn-vaciar-carrito' onClick={clearCart}>Vaciar Carrito<i className="fa-solid fa-trash"></i></button>
            <button className='btn btn-comprar' onClick={handleBuy}>Comprar</button>
          </article>
        </div>
      </div>
    </>
  );
};
