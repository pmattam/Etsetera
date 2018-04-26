export let addToCartReducer = (state, action) => ({
    ...state,
    cart: state.cart.concat(action.payload.product)
});

export let fetchCategoriesReducer = (state, action) => ({
    ...state,
    categories: action.payload.categories
});

export let fetchProductsReducer = (state, action) => ({
    ...state,
    products: action.payload.products
});

export let tokenToStoreReducer = (state, action) => {
    console.log("action", action.payload);
    return {
        ...state,
        user: state.user.concat(action.payload)
    }
}