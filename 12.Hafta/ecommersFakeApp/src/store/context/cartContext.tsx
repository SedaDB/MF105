import React, { createContext, useState, useContext, useEffect } from "react";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity?: number; // Optional property for quantity
  totalPrice?: number; // Optional property for total price
}

interface CartContextState {
  carts: CartItem[];
  itemCount: number;
  totalAmount: number;
  addToCart: (item: CartItem) => void;
  removeFromCart: (itemId: number) => void;
  clearCart: () => void;
}

const fetchFromLocalStorage = (): CartItem[] => {
  let cart = localStorage.getItem("cart");
  if (cart) {
    return JSON.parse(cart);
  } else {
    return [];
  }
};

const initialState: CartContextState = {
  carts: fetchFromLocalStorage(),
  itemCount: 0,
  totalAmount: 0,
  addToCart: (item: CartItem) => { }, // Placeholder function for type safety
  removeFromCart: (itemId: number) => { }, // Placeholder function for type safety
  clearCart: () => { }, // Placeholder function for type safety
};

const CartContext = createContext(initialState);

const storeInLocalStorage = (data) => {
  localStorage.setItem('cart', JSON.stringify(data));
};

const calculateTotalAmount = (cart) => {
  return cart.reduce((total, item) => total + item.price * item.quantity, 0);
};

const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<CartItem[]>(initialState.carts);
  const [totalAmount, setTotalAmount] = useState<number>(0);

  const addToCart = (item: CartItem) => {
    setCart((prevCart) => [...prevCart, item]);
    // Update itemCount and totalAmount based on item quantity and price (logic not shown here)
  };

  const removeFromCart = (itemId: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
    // Update itemCount and totalAmount after removing item (logic not shown here)
  };

  const clearCart = () => {
    setCart([]);
    setTotalAmount(0);
    // Update itemCount and totalAmount to 0 (logic not shown here)
  };

  useEffect(() => {
    storeInLocalStorage(cart);
    const totalAmount = calculateTotalAmount(cart)
    setTotalAmount(totalAmount);
  }, [cart]);


  return (
    <CartContext.Provider value={{
      carts: cart,
      itemCount: cart.length,
      totalAmount,
      addToCart,
      removeFromCart,
      clearCart,
    }}>
      {children}
    </CartContext.Provider>
  )
};

const useCart = (): CartContextState => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export { CartProvider, useCart };
