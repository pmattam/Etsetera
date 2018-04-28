import React from "react";
import { connect } from "react-redux";
import Navbar from "./Navbar";
import { editCart, removeCart } from "../actions/action-fns";
import { editQuantityInUserCart, removeItemFromUserCart } from "../lib/api-calls";

let CartWrapper = ({ cart, products, props, editCart, removeCart }) => {
    let itemToEdit = {};
    let qty = "1";

    console.log("cart products", products);
    console.log("cart", cart);

    let handleQuantity = (event) => {
        qty = event.target.value;
        console.log("QUANTITY", qty);
    };
    
    let handleEditCartItem = (event, product, cartItem) => {
        itemToEdit.quantity = parseInt(qty, 10);
        itemToEdit.id = cartItem._id;
        itemToEdit.userId = cartItem.user._id;
        console.log("inside cart", itemToEdit);
        editQuantityInUserCart(itemToEdit)
            .then(res => res.json())
            .then(response => {
                console.log("response", response);
                editCart(itemToEdit);
                props.history.push("/cart");
            })
    };

    let handleRemoveCartItem = (event, product, cartItem) => {
        let cartItemId = cartItem._id
        removeItemFromUserCart(cartItemId)
            .then(res => res.json())
            .then(response => {
                console.log("response", response);
                removeCart(cartItem);
                props.history.push("/cart");
            })
    };

    return (
        <div className="main-cart">
            <div>
                <Navbar />
            </div>
            <h3>Your Cart</h3>
            {
            cart.map(cartItem => {
                let product = products.filter(product => product._id === cartItem.product._id)[0];
                return <div className="cart-item">
                    <div>Product: {product.title}</div>
                    <div>
                        <select value={cartItem.quantity} onChange={handleQuantity}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>

                    <div>Price: {product.price}</div>
                    <div>
                        <button className="editcartitem-bt" onClick={ event => handleEditCartItem(event, product, cartItem) }> Update Quantity</button>
                    </div>
                    <div>
                        <button className="removecartitem-bt" onClick={ event => handleRemoveCartItem(event, product, cartItem) }> Remove From Cart</button>
                    </div>
                </div>
            })
            }
            <div>
                {/* <button className="checkout-bt" onClick={ event => handleCheckout() }> Checkout </button> */}
            </div>
        </div>
    )
};

let mapStateToProps = (state, props) => ({ cart: state.cart, products: state.products, props });

let mapDispatchToProps = dispatch => {
    return {
        editCart: (itemToEdit) => dispatch(editCart(itemToEdit)),
        removeCart: (cartItem) => dispatch(removeCart(cartItem))
    };
};

let Cart = connect(mapStateToProps, mapDispatchToProps)(CartWrapper);

export default Cart;