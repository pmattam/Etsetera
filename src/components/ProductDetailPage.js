import React from "react";
import { connect } from "react-redux";
import { addToCart } from "../actions/action-functions";
import Navbar from "./Navbar";

let ProductDetailPageWrapper = ({ cart, products, props, addToCart }) => {

    let productId = props.match.params.id;
    let product = products.filter(productObj => productObj.id === parseInt(productId, 10))[0];
    
    let handleAddToCart = (product) => {
        console.log("CART DETAILS", cart);
        addToCart(product);
    }

    return <div className="product-details">
        <Navbar />
        <div>
            <h1>{product.name}</h1>
        </div>
        <div>
            <img className="detail-page-image" src={product.img} alt={product.name}/>
        </div>
        <div>
            Price: 
            {
                product.price
            }
        </div>
        <div>
            <button className="addcart-bt" onClick={handleAddToCart}> Add To Cart</button>
        </div>
    </div>

}

let mapStateToProps = (state, props) => ({ cart: state.cart, products: state.products, props });

let mapDispatchToProps = dispatch => {
    return {
        addToCart: product => dispatch(addToCart(product))
    };
};

let ProductDetailPage = connect(mapStateToProps, mapDispatchToProps)(ProductDetailPageWrapper);

export default ProductDetailPage;