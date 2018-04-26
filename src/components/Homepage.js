import React, { Component } from "react";
import Navbar from "./Navbar";
// import categories from "../json/categories";
// import products from "../json/products";
import { fetchCategories, fetchProducts } from "../actions/action-functions";
import { getCategories, getProducts } from "../lib/helper-functions"
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
// import { getProducts } from "../lib/helper-functions";

class HomepageWrapper extends Component {
    componentDidMount() {
        // this.props.fetchCategories(categories);
        // this.props.fetchProducts(products);
        getCategories()
            .then(res => res.json())
            .then(categories => { 
                // console.log("FETCHED CATEGORIES", categories);
                this.props.fetchCategories(categories);
            })
        getProducts()
            .then(res => res.json())
            .then(products => {
                // console.log("FETCHED PRODUCTS",products);
                this.props.fetchProducts(products);
            })
    }

    render() {
        let categories = this.props.categories;
        let products = this.props.products;

        // console.log("CATs", this.props.categories);
        // console.log("PRODs", this.props.products);
        // console.log("USERs", this.props.users);
        // console.log("CART", this.props.cart);

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
                                // return <div className={category.title.toLowerCase()}>
                                return <div className="each-categories">
                                    <Link to={`/category/${category.title}`}>
                                        <img className="category-image" src={ category.img } alt={ category.title }/>
                                    </Link>
                                </div>
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
                                // return <div className={product.name.toLowerCase()}>
                                return <div className="each-products">
                                    <div>
                                        <Link to={`/product/${ product.id }`}>
                                            <img className="product-image" src={ product.images[0].url } alt={ product.title }/>
    
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
        fetchProducts: products => dispatch(fetchProducts(products))
    };
};
      
let Homepage = connect(mapStateToProps, mapDispatchToProps)(HomepageWrapper);

export default Homepage;

