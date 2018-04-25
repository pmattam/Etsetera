import { addToCart, fetchCategories, fetchProducts } from "../actions/action-functions";
import { addToCartReducer, fetchCategoriesReducer, fetchProductsReducer } from "./reducer-functions";
import users from "../json/users";

const initialState = {
    cart: [],
    categories: [],
    products: [],
    users: users
};

let reducers = {
    [addToCart]: addToCartReducer,
    [fetchCategories]: fetchCategoriesReducer,
    [fetchProducts]: fetchProductsReducer
};

let fallbackReducer = state => state;

let reducer = (state = initialState, action) => {
    let miniReducer = reducers[action.type];
    miniReducer = miniReducer || fallbackReducer;
    let newState = miniReducer(state, action);
    return newState;
};

export default reducer;