import { addToCart, editCartItem, fetchAllCartItems, fetchCategories, fetchProducts, removeCartItem, tokenToStore } from "../actions/action-fns";
import { addToCartReducer, editCartItemReducer, fetchAllCartItemsReducer, fetchCategoriesReducer, fetchProductsReducer, removeCartItemReducer, tokenToStoreReducer } from "./reducer-fns";

const initialState = {
    cart: [],
    categories: [],
    products: [],
    user: []
};

let reducers = {
    [addToCart]: addToCartReducer,
    [editCartItem]: editCartItemReducer,
    [fetchAllCartItems]: fetchAllCartItemsReducer,
    [fetchCategories]: fetchCategoriesReducer,
    [fetchProducts]: fetchProductsReducer,
    [removeCartItem]: removeCartItemReducer,
    [tokenToStore]: tokenToStoreReducer
};

let fallbackReducer = state => state;

let reducer = (state = initialState, action) => {
    let miniReducer = reducers[action.type];
    miniReducer = miniReducer || fallbackReducer;
    let newState = miniReducer(state, action);
    return newState;
};

export default reducer;