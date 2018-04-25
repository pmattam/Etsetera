import React, { Component } from "react";
import Navbar from "./Navbar";
import categories from "../json/categories";
import products from "../json/products";
import { fetchCategories, fetchProducts } from "../actions/action-functions";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";

class HomepageWrapper extends Component {
    componentDidMount() {
        this.props.fetchCategories(categories);
        this.props.fetchProducts(products);
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
                                return <div className={category.name.toLowerCase()}>
                                    <Link to={`/category/${category.name}`}>
                                        <img className="category-image" src={ category.img }alt={ category.name }/>
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
                                        <Link to={`/product/${product.id}`}>
                                            <img className="product-image" src={product.img} alt={product.name}/>
                                        </Link>
                                    </div>
                                    <div className="product-name"> 
                                        {
                                            product.name
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
    
let mapStateToProps = state => ({ categories: state.categories, products: state.products });

let mapDispatchToProps = dispatch => { 
    return { 
        fetchCategories: categories => dispatch(fetchCategories(categories)),
        fetchProducts: products => dispatch(fetchProducts(products))
    };
};
      
let Homepage = connect(mapStateToProps, mapDispatchToProps)(HomepageWrapper)

export default Homepage;