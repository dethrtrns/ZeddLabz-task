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

const categories: Categories = [
  {
    id: 1,
    title: "Breads",
    img: "../assets/images/CategoryImgs/Ellipse17ctgryBreads.png",
  },
  {
    id: 2,
    title: "Chocolates",
    img: "../assets/images/CategoryImgs/Ellipse17ctgryBreads.png",
  },
  {
    id: 3,
    title: "Grains",
    img: "../assets/images/CategoryImgs/Ellipse17ctgryBreads.png",
  },
  {
    id: 4,
    title: "Vegetables",
    img: "../assets/images/CategoryImgs/Ellipse17ctgryBreads.png",
  },
  {
    id: 5,
    title: "Fruits",
    img: "../assets/images/CategoryImgs/Ellipse17ctgryBreads.png",
  },
  {
    id: 6,
    title: "Exotic",
    img: "../assets/images/CategoryImgs/Ellipse17ctgryBreads.png",
  },
];

const products: Products = [
  {
    title: "Britannia Whole Wheat Brown Bread",
    price: 50,
    quantity: [250, 400, 600],
    img: "../assets/images/CategoryImgs/Ellipse17ctgryBreads.png",
    categoryId: categories[0].id,
    description: "",
  },
  {
    title: "Britannia Brown Bread",
    price: 40,
    quantity: [250, 400],
    img: "../assets/images/CategoryImgs/Ellipse17ctgryBreads.png",
    categoryId: categories[0].id,
    description: "",
  },
  {
    title: "Britannia Atta Bread",
    price: 40,
    quantity: [250],
    img: "../assets/images/CategoryImgs/Ellipse17ctgryBreads.png",
    categoryId: categories[0].id,
    description: "",
  },
  {
    title: "Britannia Brown Bread",
    price: 40,
    quantity: [250],
    img: "../assets/images/CategoryImgs/Ellipse17ctgryBreads.png",
    categoryId: categories[0].id,
    description: "Soft and fresh loaded with whole wheat goodness.",
  },
  {
    title: "Britannia Atta Bread",
    price: 40,
    quantity: [250],
    img: "../assets/images/CategoryImgs/Ellipse17ctgryBreads.png",
    categoryId: categories[0].id,
    description:
      "Atta bread is made from the choicest ingredients, soft and fresh loaded with goodness.",
  },
  {
    title: "Britannia Atta Bread",
    price: 40,
    quantity: [250],
    img: "../assets/images/CategoryImgs/Ellipse17ctgryBreads.png",
    categoryId: categories[0].id,
    description:
      "Atta bread is made from the choicest ingredients, soft and fresh loaded with goodness.",
  },
];

export const dummyData: ProductState = {
  products,
  categories,
};
