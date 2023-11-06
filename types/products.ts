export interface Category {
  id: number;
  title: string;
  img: string;
}

export interface Product {
  title: string;
  price: number;
  quantity: number[];
  img: string;
  categoryId: Category["id"];
}

export type Products = Product[];

export type Categories = Category[];
