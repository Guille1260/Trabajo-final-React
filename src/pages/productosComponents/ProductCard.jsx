
/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

export default function ProductCard({ product }) {
    const { addToCart } = useCart()
    const añadirCarrito  = (e) => {
      e.preventDefault(); 
      addToCart(product);  // Llama a la función addToCart y pasa el producto
      console.log('Producto agregado al carrito:', product);
      
    };
    
    return (
      <>
        <Link to={`/detalles/${product.id}`} className='tarjeta'  >
                
                <article className="conteiner-imagen"> 
                    <img src={product.imagen} alt={product.titulo} />
                    
                </article>
                <article className="conteiner-titulo-tarjeta">
                  <h4>{product.titulo}</h4>
                </article>
                <article className="conteier-precio-boton">
                  <p className='precio'>
                       {new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(parseFloat(product.precio))}
                  </p>

                    
                    <button
                      className='btn-carrito'
                      onClick={añadirCarrito }
                    >
                      <i className="fa-solid fa-cart-shopping"></i>
                    </button>
                </article>
                
                
            
            
        </Link>
      </>
    );
  }
  