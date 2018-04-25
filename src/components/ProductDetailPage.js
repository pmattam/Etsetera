import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "../actions/action-functions";

class ProductDetailPageWrapper extends Component {

    render() {
        let productId = this.props.match.params.id;
        let products = this.props.products;
        let product = products.filter(productObj => productObj.id === parseInt(productId, 10))[0];
        
        let handleAddToCart = (product) => {
            console.log('clicked add to cart');
            this.props.addToCart(product);
        }

        return <div className="product-details">
            <div>
                <h1>{product.name}</h1>
            </div>
            <div>
                <img className="detail-page-image" src={`../..${product.img}`} alt={product.name}/>
            </div>
            <div>
                Price: 
                {
                    product.price
                }
            </div>
            <div>
                <button onClick={handleAddToCart}> Add To Cart</button>
            </div>
        </div>
    }
}

let mapStateToProps = state => ({ products: state.products });

let mapDispatchToProps = dispatch => { 
    return { 
        addToCart: product => dispatch(addToCart(product))
    };
};
  
let ProductDetailPage = connect(mapStateToProps, mapDispatchToProps)(ProductDetailPageWrapper);

export default ProductDetailPage;