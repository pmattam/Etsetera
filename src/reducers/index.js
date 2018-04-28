import { addToCart, editCart, fetchAllCartItems, fetchCategories, fetchProducts, tokenToStore } from "../actions/action-fns";
import { addToCartReducer, editCartReducer, fetchAllCartItemsReducer, fetchCategoriesReducer, fetchProductsReducer, tokenToStoreReducer } from "./reducer-fns";

const initialState = {
    cart: [],
    categories: [],
    products: [],
    user: []
};

let reducers = {
    [addToCart]: addToCartReducer,
    [editCart]: editCartReducer,
    [fetchAllCartItems]: fetchAllCartItemsReducer,
    [fetchCategories]: fetchCategoriesReducer,
    [fetchProducts]: fetchProductsReducer,
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