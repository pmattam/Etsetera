import { ADD_TO_CART, EDIT_CART, FETCH_ALL_CART_ITEMS, FETCH_CATEGORIES, FETCH_PRODUCTS, REMOVE_CART, TOKEN_TO_STORE } from "../constants/index";

export let addToCart = (product, qty) => ({
    type: ADD_TO_CART,
    payload: { product, qty }
});

addToCart.toString = () => ADD_TO_CART;

export let editCart = (itemToEdit) => ({
    type: EDIT_CART,
    payload: { itemToEdit }
});

editCart.toString = () => EDIT_CART;

export let removeCart = (cartItem) => ({
    type: REMOVE_CART,
    payload: { cartItem }
});

removeCart.toString = () => REMOVE_CART;

export let fetchAllCartItems = (cartItems) => ({
    type: FETCH_ALL_CART_ITEMS,
    payload: { cartItems }
});

fetchAllCartItems.toString = () => FETCH_ALL_CART_ITEMS;

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

export let tokenToStore = (identifier, token, userId) => ({
    type: TOKEN_TO_STORE,
    payload: { identifier, token, userId }
});

tokenToStore.toString = () => TOKEN_TO_STORE;