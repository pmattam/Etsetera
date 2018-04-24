import { FETCH_CATEGORIES, FETCH_PRODUCTS } from "../constants/index";

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