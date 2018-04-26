import { addToCart, fetchCategories, fetchProducts, tokenToStore } from "../actions/action-functions";
import { addToCartReducer, fetchCategoriesReducer, fetchProductsReducer, tokenToStoreReducer } from "./reducer-functions";

const initialState = {
    cart: [],
    categories: [],
    products: [],
    user: []
};

let reducers = {
    [addToCart]: addToCartReducer,
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