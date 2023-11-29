import { createContext, useState } from 'react';

export const CartContext = createContext(); // Create a context object

// eslint-disable-next-line react/prop-types
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Add a product to the cart
  const addToCart = (product) => {
    setCart([...cart, product]);
  };
  
  // Remove a product from the cart
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // Get the total number of products in the cart. Its used in the CartWidget component
  const totalProducts = cart.reduce((acc, item) => acc + item.quantity, 4);

console.log(cart);
  const values = {
    cart,
    addToCart,
    removeFromCart,
    totalProducts,
  };

  return (
    <CartContext.Provider value={values}>
      {children}
    </CartContext.Provider>
  );
}
