import { Categories, ProductState, Products } from "../types/products";

export const categories: Categories = [
    {
        id: 1,
        title: "Breads",
        img: require("../assets/images/CategoryImgs/Ellipse17ctgryBreads.png"),
    },
    {
        id: 2,
        title: "Chocolates",
        img: require("../assets/images/CategoryImgs/Ellipse17ctgryBreads.png"),
    },
    {
        id: 3,
        title: "Grains",
        img: require("../assets/images/CategoryImgs/Ellipse17ctgryBreads.png"),
    },
    {
        id: 4,
        title: "Vegetables",
        img: require("../assets/images/CategoryImgs/Ellipse17ctgryBreads.png"),
    },
    {
        id: 5,
        title: "Fruits",
        img: require("../assets/images/CategoryImgs/Ellipse17ctgryBreads.png"),
    },
    {
        id: 6,
        title: "Exotic",
        img: require("../assets/images/CategoryImgs/Ellipse17ctgryBreads.png"),
    },
];

export const products: Products = [
    {
        id: 1,
        title: "Britannia Whole Wheat Brown Bread",
        price: 50,
        quantity: [250, 400, 600],
        img: require("../assets/images/ItemImgs/Ellipse24ItemAb.png"),
        categoryId: categories[0].id,
        description: "",
    },
    {
        id: 2,
        title: "Britannia Brown Bread",
        price: 40,
        quantity: [250, 400],
        img: require("../assets/images/ItemImgs/Ellipse24ItemAb.png"),
        categoryId: categories[0].id,
        description: "",
    },
    {
        id: 3,
        title: "Britannia Atta Bread",
        price: 40,
        quantity: [250],
        img: require("../assets/images/ItemImgs/Ellipse24ItemAb.png"),
        categoryId: categories[0].id,
        description: "",
    },
    {
        id: 4,
        title: "Britannia Brown Bread",
        price: 40,
        quantity: [250],
        img: require("../assets/images/ItemImgs/Ellipse24ItemAb.png"),
        categoryId: categories[0].id,
        description: "Soft and fresh loaded with whole wheat goodness.",
    },
    {
        id: 5,
        title: "Britannia Atta Bread",
        price: 40,
        quantity: [250],
        img: require("../assets/images/ItemImgs/Ellipse24ItemAb.png"),
        categoryId: categories[0].id,
        description:
            "Atta bread is made from the choicest ingredients, soft and fresh loaded with goodness.",
    },
    {
        id: 6,
        title: "Britannia Atta Bread",
        price: 40,
        quantity: [250],
        img: require("../assets/images/ItemImgs/Ellipse24ItemAb.png"),
        categoryId: categories[0].id,
        description:
            "Atta bread is made from the choicest ingredients, soft and fresh loaded with goodness.",
    },
];

export const dummyData: ProductState = {
    products,
    categories,
};
