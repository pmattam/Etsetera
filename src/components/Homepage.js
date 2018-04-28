import React, { Component } from "react";
import Navbar from "./Navbar";
import { fetchAllCartItems, fetchCategories, fetchProducts } from "../actions/action-fns";
import { getAllCartItems, getCategories, getProducts } from "../lib/api-calls"
import { Link } from 'react-router-dom';
import { connect } from "react-redux";

class HomepageWrapper extends Component {
    componentDidMount() {

        getCategories()
            .then(res => res.json())
            .then(categories => { 
                this.props.fetchCategories(categories);
            })
        getProducts()
            .then(res => res.json())
            .then(products => {
                this.props.fetchProducts(products);
            })
        getAllCartItems()
            .then(res => res.json())
            .then(cartItems => {
                this.props.fetchAllCartItems(cartItems);
            })
    }

    render() {
        let categories = this.props.categories;
        let products = this.props.products;

        return(
            <div className="main-homepage">
                <Navbar />

                <div className="category">
                    <div className="category-heading">
                        <h1>Shop By Category</h1>
                    </div>

                    <div className="category-type">
                        {
                            categories.map(category => { 
                                return (
                                    <div className="each-categories">
                                        <Link to={`/category/${category.title}`}>
                                            <img className="category-image" src={ `/images/${category.title}.jpg`} alt={ category.title }/>
                                        </Link>
                                    </div>
                                )
                            })  
                        }
                    </div>
                </div>
                <div className="products">
                    <div className="products-heading">
                        <h1>Shop By Products</h1>
                    </div>

                    <div className="products-type"> 
                        {
                            products.map(product => {
                                return (
                                    <div className="each-products">
                                        <div>
                                            <Link to={`/product/${ product._id }`}>
                                                <img className="product-image" src={ `/images/${product.title}.jpg` } alt={ product.title }/>
                                            </Link>
                                        </div>
                                        <div className="product-name"> 
                                            {
                                                product.description
                                            }
                                        </div>
                                        <div className="product-price">
                                            {
                                                product.price
                                            }
                                        </div>
                                    </div>  
                                ) 
                            })
                        }
                    </div>
                </div>
            </div>
        );  
    }
}
    
let mapStateToProps = state => ({ categories: state.categories, products: state.products, users: state.users, cart: state.cart });

let mapDispatchToProps = dispatch => { 
    return { 
        fetchCategories: categories => dispatch(fetchCategories(categories)),
        fetchProducts: products => dispatch(fetchProducts(products)),
        fetchAllCartItems: cartItems => dispatch(fetchAllCartItems(cartItems))
    };
};
      
let Homepage = connect(mapStateToProps, mapDispatchToProps)(HomepageWrapper);

export default Homepage;

