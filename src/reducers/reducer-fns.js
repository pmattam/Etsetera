export let addToCartReducer = (state, action) => ({
    ...state,
    cart: state.cart.concat(action.payload)
});

export let fetchAllCartItemsReducer = (state, action) => ({
    ...state,
    cart: action.payload.cartItems
});

export let fetchCategoriesReducer = (state, action) => ({
    ...state,
    categories: action.payload.categories
});

export let fetchProductsReducer = (state, action) => ({
    ...state,
    products: action.payload.products
});

export let tokenToStoreReducer = (state, action) => ({
    ...state,
    user: state.user.concat(action.payload)
});