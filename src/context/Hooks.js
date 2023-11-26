import { useContext } from 'react';
import { UserContext } from './UserContext';
import { CartContext } from './CartContext';

// Custom hooks

// Hook for UserContext, returns the context value
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}

// Hook for CartContext, returns the context value
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}