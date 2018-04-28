import { ADD_TO_CART, EDIT_CART_ITEM, FETCH_ALL_CART_ITEMS, FETCH_CATEGORIES, FETCH_PRODUCTS, REMOVE_CART_ITEM, TOKEN_TO_STORE } from "../constants/index";

export let addToCart = (product, qty) => ({
    type: ADD_TO_CART,
    payload: { product, qty }
});

addToCart.toString = () => ADD_TO_CART;

export let editCartItem = (itemToEdit) => ({
    type: EDIT_CART_ITEM,
    payload: { itemToEdit }
});

editCartItem.toString = () => EDIT_CART_ITEM;

export let removeCartItem = (cartItem) => ({
    type: REMOVE_CART_ITEM,
    payload: { cartItem }
});

removeCartItem.toString = () => REMOVE_CART_ITEM;

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