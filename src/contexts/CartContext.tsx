import { createContext, ReactNode, useState } from "react";
import { Coffee } from "../pages/Home/components/CoffeeCard";

interface CartItem extends Coffee {
  quantity: number;
}

interface CartContextType {
  cartQuantity: number;
  cartItems: CartItem[];
  addCoffeeToCart: (coffee: CartItem) => void;
}

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const cartQuantity = cartItems.length;

  function addCoffeeToCart(coffee: CartItem) {
    const coffeeAlreadyExistsInCart = cartItems.findIndex(
      (cartItem) => cartItem.id === coffee.id
    );

    if (coffeeAlreadyExistsInCart < 0) {
      setCartItems((prevState) => [...prevState, coffee]);
    } else {
      const cartList = cartItems.filter(
        (coffeeItem) => coffeeItem.id !== coffee.id
      );
      setCartItems([...cartList, { ...coffee, quantity: coffee.quantity }]);
    }
  }

  console.log(cartItems);

  return (
    <CartContext.Provider value={{ cartQuantity, cartItems, addCoffeeToCart }}>
      {children}
    </CartContext.Provider>
  );
}
