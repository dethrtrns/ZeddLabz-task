import { ImageSourcePropType } from "react-native";

export interface Category {
  id: number;
  title: string;
  img: ImageSourcePropType;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  quantity: number[];
  img: ImageSourcePropType;
  categoryId: Category["id"];
  description: string;
}

export type Products = Product[];

export type Categories = Category[];

export interface CartItem {
  product: Product;
  quantity: number;
}

export type CartItems = CartItem[];

export interface CartState {
  items: CartItems;
}

export interface ProductState {
  products: Products;
  categories: Categories;
}

export interface RootState {
  cart: CartState;
  products: ProductState;
}

