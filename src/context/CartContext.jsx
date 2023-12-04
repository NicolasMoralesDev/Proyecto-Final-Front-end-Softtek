import { createContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';

export const CartContext = createContext(); // Create a context object

// eslint-disable-next-line react/prop-types
export const CartProvider = ({ children }) => {

  /**
   * cart: An array that contains all the products added to the cart. Each product is an object with the following structure:
   * {
   *   {
   *      product: {
   *        id: 1,
   *        name: "Product 1",
   *        brand: "Brand 1",
   *        price: 100,
   *        imageUrl: "https://www.example.com/image.png"
   *      },
   *      amount: 2
   *   },
   *   {
   *     product: { 
   *        id: 2,
   *        name: "Product 2",
   *        brand: "Brand 2",
   *        price: 200,
   *        imageUrl: "https://www.example.com/image.png"
   *     },
   *     amount: 1
   *   },
   * }
   */
  const [cart, setCart] = useState([]);

  const loadCartFromStorage = () => {
    const cart = localStorage.getItem('cart');
    if (cart) {
      setCart(JSON.parse(cart));
    } else {
      setCart([]);
    }
  };

  /**
   * Update the cart in the localStorage.
   */
  const updateCartStorage = () => localStorage.setItem('cart', JSON.stringify(cart));

  /**
   * Load the cart from the localStorage when the app starts
   */
  useEffect(() => loadCartFromStorage(), []);

  useEffect(() => updateCartStorage(), [cart])

  /**
   * Add a product to the cart.
   * @param {*} productToAdd Product received from the Product component. { id: 1, name: "Product 1", price: 100 }
   * @param {*} amount Amount of products to add to the cart (1, 2, 3, etc)
   */
  const addToCart = (productToAdd, amount) => {

    const itemInCart = cart.find((item) => item.product.id === productToAdd.id);
    if (itemInCart) {
      // If the product is already in the cart, update the amount
      updateAmount(productToAdd.id, itemInCart.amount + amount);
      toast.success('Se actualizó el producto en el carrito');
    } else {
      // If the product is not in the cart, add it
      setCart([...cart, { product: productToAdd, amount }]);
      toast.success('Se agregó el producto al carrito');
    }
    updateCartStorage();
  };


  // Update the amount of a product in the cart
  const updateAmount = (productId, amount) => {
    setCart(cart.map((item) => {
      if (item.product.id === productId) {
        return { ...item, amount };
      }
      return item;
    }));
    updateCartStorage();
  };

  // Remove a product from the cart
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.product.id !== id));
    toast.error('Se eliminó el producto del carrito');
    updateCartStorage();
  };

  const getProductQuantity = (id) => { 
    const item = cart.find((i) => i.product.id === id);
    return item ? item.amount : 1;
  }


  // Delete all the products from the cart
  const clearCart = () => {
    setCart([]);
    updateCartStorage();
  };

  const values = {
    cart, // representa el estado del carrito
    addToCart, // función para agregar un producto al carrito
    removeFromCart, // función para eliminar un producto del carrito
    updateAmount, // función para actualizar la cantidad de un producto en el carrito
    clearCart, // función para eliminar todos los productos del carrito
    getProductQuantity, // función para obtener la cantidad de un producto en el carrito
  };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};
