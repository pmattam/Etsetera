import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../actions/action-functions";
import Navbar from "./Navbar";

let ProductDetailPageWrapper = ({ cart, products, props, addToCart }) => {

    console.log("PRODUCTS", products);
    console.log("PROPS", props);

    let productId = props.match.params.id;
    console.log(typeof(productId));
    let product = products.find(productObj => productObj.id === productId);
    console.log("PRODUCT OBJECT",product);
    
    let handleAddToCart = (product) => {
        console.log("Entire Product", product);
        addToCart(product);
    }

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
                <Link to={`/cart/${ product.id }`}>
                    <button className="addcart-bt" onClick={ handleAddToCart }> Add To Cart</button>
                </Link>
            </div>
        </div>
    )

};

let mapStateToProps = (state, props) => ({ cart: state.cart, products: state.products, props });

let mapDispatchToProps = dispatch => {
    return {
        addToCart: product => dispatch(addToCart(product))
    };
};

let ProductDetailPage = connect(mapStateToProps, mapDispatchToProps)(ProductDetailPageWrapper);

export default ProductDetailPage;