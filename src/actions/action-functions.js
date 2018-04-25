import { ADD_PRODUCT_TO_CART, FETCH_CATEGORIES, FETCH_PRODUCTS } from "../constants/index";

export let addToCart = (product) => ({
    type: ADD_PRODUCT_TO_CART,
    payload: { product }
});

addToCart.toString = () => ADD_PRODUCT_TO_CART;

export let fetchCategories = (categories) => ({
    type: FETCH_CATEGORIES,
    payload: { categories }
});

fetchCategories.toString = () => FETCH_CATEGORIES;

export let fetchProducts = (products) => ({
    type: FETCH_PRODUCTS,
    payload: { products }
});

fetchProducts.toString = () => FETCH_PRODUCTS;