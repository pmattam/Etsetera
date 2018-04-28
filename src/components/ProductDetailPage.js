import React from "react";
import { connect } from "react-redux";
import { addToCart } from "../actions/action-fns";
import { addItemToUserCart } from "../lib/api-calls";
import Navbar from "./Navbar";

let ProductDetailPageWrapper = ({ cart, products, user, props, addToCart }) => {

    let itemToCart = {};
    let qty = "1";
    let productId = props.match.params.id;
    let product = products.find(productObj => productObj._id === productId);

    let handleQuantity = (event) => {
        qty = event.target.value;
    };
    
    let handleAddToCart = (event, product) => {
        console.log("ALL THE PRODUCTS", product);
        console.log("USER ID", user[0].userId);
        itemToCart.quantity = qty;
        itemToCart.product = { "_id": product._id };
        itemToCart.user = { "_id": user[0].userId };
        let token_val = localStorage.getItem("authorization");
        console.log(itemToCart);
        addItemToUserCart(itemToCart, token_val)
            .then(res => res.json())
            .then(response => {
                addToCart(product, qty)
                props.history.push("/cart");
            })
    };

    return (
        <div className="product-details">
            <Navbar />
            <div>
                <h1>{ product.title }</h1>
            </div>

            <div>
                <img className="detail-page-image" src={ `/images/${product.title}.jpg` } alt={ product.title }/>
            </div>

            <div>
                Price: 
                {
                    product.price
                }
            </div>

            <div>
                <button className="addcart-bt" onClick={ event => handleAddToCart(event, product) }> Add To Cart</button>
            </div>

            <div>
                <select onChange={handleQuantity}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
        </div>
    )
};

let mapStateToProps = (state, props) => ({ cart: state.cart, products: state.products, user: state.user, props });

let mapDispatchToProps = dispatch => ({ addToCart: (product, qty) => dispatch(addToCart(product, qty)) });

let ProductDetailPage = connect(mapStateToProps, mapDispatchToProps)(ProductDetailPageWrapper);

export default ProductDetailPage;

