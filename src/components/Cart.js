import React from "react";
import { connect } from "react-redux";
import Navbar from "./Navbar";
import { editCart, removeCart } from "../actions/action-fns";
import { editQuantityInUserCart, removeItemFromUserCart } from "../lib/api-calls";

let CartWrapper = ({ cart, products, props, editCart }) => {
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
        //itemToEdit.productId = product._id;
        itemToEdit.id = cartItem._id;
        itemToEdit.userId = cartItem.user._id;
        console.log("inside cart", itemToEdit);
        // let token_val = localStorage.getItem("authorization");
        editQuantityInUserCart(itemToEdit)
            .then(res => res.json())
            .then(response => {
                console.log("response", response);
                editCart(itemToEdit);
                props.history.push("/cart");
            })
    };

    let handleRemoveCartItem = (cartItem) => {
        let token_val = localStorage.getItem("authorization");
        removeItemFromUserCart(cartItem._id, token_val)
            .then(res => res.json())
            .then(response => {
                removeCart(cartItem);
                props.history.push("/cart");
            })
    };

    return (
        <div>
            <div>
                <Navbar />
            </div>
            <h3>Your Cart</h3>
            {
            cart.map(cartItem => {
                let product = products.filter(product => product._id === cartItem.product._id)[0];
                return <div>
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

let mapDispatchToProps = dispatch => ({ editCart: (itemToEdit) => dispatch(editCart(itemToEdit)) });

let Cart = connect(mapStateToProps, mapDispatchToProps)(CartWrapper);

export default Cart;