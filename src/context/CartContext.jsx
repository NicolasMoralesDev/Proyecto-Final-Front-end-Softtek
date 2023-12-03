import { createContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';

export const CartContext = createContext(); // Create a context object

// eslint-disable-next-line react/prop-types
export const CartProvider = ({ children }) => {
  /**
   * cart: An array that contains all the products added to the cart. Each product is an object with the following structure:
   * {
   *   id: The product id,
   *   name: The product name,
   *   price: The product price,
   *   amount: The amount of products added to the cart,
   * }
   */
  const [cart, setCart] = useState([]);

  const loadCartFromStorage = () => {
    const cart = localStorage.getItem("cart");
    if (cart) {
      setCart(JSON.parse(cart));
    }
  }

  /**
   * Update the cart in the localStorage. 
   */
  const updateCartStorage = () => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  /**
   * Load the cart from the localStorage when the app starts
   */
  useEffect(() => {
    loadCartFromStorage();
  }
  , []);


  // Add a product to the cart
  const addToCart = (product, amount) => {
    
    // Check if the product is already in the cart
    const existingProduct = cart.find((item) => item.id === product.id);

    // If the product is already in the cart, update the amount
    if (existingProduct) {
      toast.success(`Se agregó ${amount} ${product.name} al carrito`);
      setCart(
        cart.map((item) =>

          // If the product is already in the cart, update the amount. Otherwise, return the product as it is to keep it in the cart
          item.id === product.id ? { ...existingProduct, amount: item.amount + amount } : item
        )
      );

    // If the product is not in the cart, add it
    } else {
      toast.success(`Se agregó ${amount} ${product.name} al carrito`);
      setCart([...cart, { ...product, amount }]);
    }

    // Update the localStorage
    updateCartStorage();
  };

  // Update the amount of a product in the cart
  const updateAmount = (id, amount) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, amount } : item
      )
    );
    updateCartStorage();
  };
  
  // Remove a product from the cart
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
    toast.error('Se eliminó el producto del carrito');
    updateCartStorage();
  };

  // Get the total number of products in the cart. Its used in the CartWidget component
  const totalProducts = cart.reduce((acc, item) => acc + item.amount, 0);
  
  // Delete all the products from the cart
  const clearCart = () => {
    setCart([]);
    updateCartStorage();
  };

  const values = {
    cart,
    addToCart,
    removeFromCart,
    updateAmount,
    totalProducts,
    clearCart,
  };

  return (
    <CartContext.Provider value={values}>
      {children}
    </CartContext.Provider>
  );
}
