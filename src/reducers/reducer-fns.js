export let addToCartReducer = (state, action) => ({
    ...state,
    cart: state.cart.concat(action.payload)
});

export let editCartItemReducer = (state, action) => {
    let newCartItem = state.cart.filter(item => item._id === action.payload.itemToEdit.id)[0];
    newCartItem.quantity = action.payload.itemToEdit.quantity;
    return {...state,
        cart: state.cart.map((cartItem) => cartItem._id === action.payload.itemToEdit.id ? newCartItem : cartItem)
    };
};

export let removeCartItemReducer = (state, action) => {
    return {...state,
        cart: state.cart.filter(item => item._id != action.payload.cartItem._id)
    };
};

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