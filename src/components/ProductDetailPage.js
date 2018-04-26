import React from "react";
import { connect } from "react-redux";
// import { Link } from "react-router-dom";
import { addToCart } from "../actions/action-functions";
import Navbar from "./Navbar";

let ProductDetailPageWrapper = ({ products, user, props, addToCart }) => {

    let quantity = "";

    console.log("Entire User Array", user[0]);

    console.log("PRODUCTS", products);
    console.log("PROPS", props);

    let productId = props.match.params.id;
    console.log(typeof(productId));
    let product = products.find(productObj => productObj.id === productId);
    console.log("PRODUCT OBJECT",product);

    let handleQuantity = (event) => {
        console.log("Quantity", typeof(event.target.value));
        quantity = event.target.value;
        // handleAddToCart
    };
    
    let handleAddToCart = (product, ) => {
        console.log("Entire Product", product);
        console.log("How many", quantity);
        product.quantity = quantity;
        let token = localStorage.getItem("authorization");
        let user_id = user[0]._id;
        console.log("token", token);
        console.log(user_id);
        console.log("product after adding quantity", product.quantity);
        addToCart(product);
    };

    return (
        <div className="product-details">
            <Navbar />
            <div>
                <h1>{ product.title }</h1>
            </div>
            <div>
                <img className="detail-page-image" src={ product.images[0].url } alt={ product.title }/>
            </div>
            <div>
                Price: 
                {
                    product.price
                }
            </div>
            <div>
                <button className="addcart-bt" onClick={ handleAddToCart }> Add To Cart</button>
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

let mapStateToProps = (state, props) => ({ products: state.products, user: state.user, props });

let mapDispatchToProps = dispatch => {
    return {
        addToCart: product => dispatch(addToCart(product))
    };
};

let ProductDetailPage = connect(mapStateToProps, mapDispatchToProps)(ProductDetailPageWrapper);

export default ProductDetailPage;

