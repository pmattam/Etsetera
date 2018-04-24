import { fetchCategories, fetchProducts } from "../actions/action-functions";
import { fetchCategoriesReducer, fetchProductsReducer } from "./reducer-functions";
import categories from "../json/categories";
import products from "../json/products";
import users from "../json/users";

// let categoriesList = [
//     { "id": 1, "name": "Technology" },
//     { "id": 2, "name": "Food and Beverage" },
//     { "id": 3, "name": "Educational" },
//     { "id": 4, "name": "Board Games" }
// ];

// let productsList = [
//     { "id": 1, "name": "Coffee Maker", "categoryId": 2, "price": 19.99 },
//     { "id": 2, "name": "Redux Help", "categoryId": 3, "price": 9.99 },
//     { "id": 3, "name": "Super Amazing Computer", "categoryId": 1, "price": 10000 },
//     { "id": 4, "name": "Werewolf", "categoryId": 4, "price": 14.99 }
// ];

// let usersList = [
//     { "id": 1, "firstname": "Seth", "lastname": "Zim" },
//     { "id": 2, "firstname": "Jonathan", "lastname": "Martin" },
//     { "id": 3, "firstname": "Joshua", "lastname": "Martin" }
// ];

const initialState = {
    categories: categories,
    products: products,
    users: users
};

let reducers = {
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