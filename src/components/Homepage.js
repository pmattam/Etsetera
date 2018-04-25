import React, { Component } from "react";
import { Link } from 'react-router-dom';
import categories from "../json/categories";
import products from "../json/products";
import { fetchCategories, fetchProducts } from "../actions/action-functions";
import { connect } from "react-redux";

class HomepageWrapper extends Component {
    componentDidMount() {
        this.props.fetchCategories(categories);
        this.props.fetchProducts(products);
    }
    render() {
        console.log(this.props);
        let categories = this.props.categories;
        let products = this.props.products;

        return(
            <div className="main-homepage">
                <div className="category">
                    <div className="category-heading">
                        <h1>Shop By Category</h1>
                    </div>
                    <div className="category-type">
                        {
                            categories.map(category => { 
                                    return <div className={category.name.toLowerCase()}>
                                        <Link to={`/category/${category.name}`}>
                                        {
                                            category.name
                                        }
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
                                return <div className={product.name.toLowerCase()}>
                                    <Link to={`/product/${product.name}`}>
                                    {
                                        product.name
                                    }
                                    </Link>
                                </div>   
                            })
                        }
                    </div>
                </div>
            </div>
        );  
    }
}
    // <div className="main-homepage">
    //     <div className="category">
    //         <div className="category-heading">
    //             <h1>Shop By Category</h1>
    //         </div>
    //         {/* <div className="category-type">
    //             <div className="clothing-category">
    //                 <Link className="clothing-link" to="/category/clothing">Clothing</Link>
    //             </div>
    //             <div className="jewelry-category">
    //                 <Link className="jewelry-link" to="/category/jewelry">Jewelry</Link>
    //             </div>
    //             <div className="toys-category">
    //                 <Link className="toys-link" to="/category/toys">Toys</Link>
    //             </div>
    //         </div> */}
    //         <div>

    //         </div>
    //     </div>
    //     <div className="products">
    //         <div className="products-heading">
    //             <h1>Shop By Products</h1>
    //         </div>
    //         <div className="products-type">
    //             <div className="tshirts">
    //                 <Link className="tshirts-link" to="/products">T-shirts</Link>
    //             </div>
    //             <div className="ear-rings">
    //                 <Link className="ear-rings-link" to="/products">Ear-rings</Link>
    //             </div>
    //             <div className="legos">
    //                 <Link className="legos-link" to="/products">Legos</Link>
    //             </div>
    //         </div>
    //     </div>
    // </div>

let mapStateToProps = state => ({ categories: state.categories, products: state.products });

let mapDispatchToProps = dispatch => { 
    return { 
    fetchCategories: categories => dispatch(fetchCategories(categories)),
    fetchProducts: products => dispatch(fetchProducts(products))
    };
};
      
let Homepage = connect(mapStateToProps, mapDispatchToProps)(HomepageWrapper)

export default Homepage;