import React from "react";
import { Products } from "../../../types/products";

interface CartContextProps {
    cartItems: Products;
    setCartItems: React.Dispatch<React.SetStateAction<Products | []>>;
}

export const CartContext = React.createContext<CartContextProps>({
    cartItems: [],
    setCartItems: () => {},
});
