import { createContext, ReactNode, useEffect, useState } from "react";
import { Coffee } from "../pages/Home/components/CoffeeCard";

export interface CartItem extends Coffee {
  quantity: number;
}

interface CartContextType {
  cartQuantity: number;
  cartItemsTotal: number;
  cartItems: CartItem[];
  addCoffeeToCart: (coffee: CartItem) => void;
  changeCartItemQuantity: (
    cartItemId: number,
    type: "increase" | "decrease"
  ) => void;
  removeCartItem: (cartItemId: number) => void;
  cleanCart: () => void;
}

interface CartContextProviderProps {
  children: ReactNode;
}

const COFFEE_ITEMS_STORAGE_KEY = "@coffeeDelivery:cartItems";

export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const storedCartItems = localStorage.getItem(COFFEE_ITEMS_STORAGE_KEY);
    if (storedCartItems) {
      return JSON.parse(storedCartItems);
    }

    return [];
  });

  const cartQuantity = cartItems.length;

  const cartItemsTotal = cartItems.reduce((acc, cartItem) => {
    return acc + cartItem.price * cartItem.quantity;
  }, 0);

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

  function changeCartItemQuantity(
    cartItemId: number,
    type: "increase" | "decrease"
  ) {
    const cartList = cartItems.map((item) => {
      if (item.id === cartItemId) {
        switch (type) {
          case "increase":
            return {
              ...item,
              quantity: item.quantity + 1,
            };

          case "decrease":
            return {
              ...item,
              quantity: item.quantity - 1,
            };
        }
      }

      return item;
    });

    setCartItems(cartList);
  }

  function removeCartItem(cartItemId: number) {
    setCartItems((prevState) =>
      prevState.filter((item) => item.id !== cartItemId)
    );
  }

  function cleanCart() {
    setCartItems([]);
  }

  useEffect(() => {
    localStorage.setItem(COFFEE_ITEMS_STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartQuantity,
        cartItemsTotal,
        cartItems,
        addCoffeeToCart,
        changeCartItemQuantity,
        removeCartItem,
        cleanCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
