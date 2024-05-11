import React, { ReactNode, createContext, useContext, useEffect, useState } from 'react';

interface Item {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface CartContextType {
  cart: Item[];
  totalCost: number;
  addToCart: (item: Item) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  incrementQuantity: (id: number) => void;
  decrementQuantity: (id: number) => void;
}
interface CartProviderProps {
  children: ReactNode;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<Item[]>([]);
  const [totalCost, setTotalCost] = useState<number>(0);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    // console.log(savedCart);
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const calculateTotalCost = (items: Item[]) => {
    const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotalCost(total);
  };

  const addToCart = (item: Item) => {
    // console.log(item);
    const existingItem = cart.find((i) => i.id === item.id);
    if (existingItem) {
      const updatedCart = cart.map((i) => (i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i));
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (id: number) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const incrementQuantity = (id: number) => {
    const updatedCart = cart.map((item) => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item));
    setCart(updatedCart);
  };

  const decrementQuantity = (id: number) => {
    const updatedCart = cart.map((item) => (item.id === id ? { ...item, quantity: Math.max(item.quantity - 1, 1) } : item));
    setCart(updatedCart);
  };

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
    calculateTotalCost(cart);
  }, [cart]);

  return (
    <CartContext.Provider
      value={{ cart, totalCost, addToCart, removeFromCart, clearCart, incrementQuantity, decrementQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};
