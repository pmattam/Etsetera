import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

class CategoryWrapper extends Component {

    render() {
        
        let category_name = this.props.match.params.name;
        let categoryName = category_name.charAt(0).toUpperCase() + category_name.slice(1);
        let categories = this.props.categories;
        let products = this.props.products;

        let categoryId = categories.filter(category => category.name === category_name)[0].id;
        let categoryProductsList = products.filter(product => product.categoryId === categoryId);

        return(
            <div className="main-category-div">
                <div className="category-name">
                    <h1>{categoryName}</h1>
                </div>
                <div className="category-sidebar-content">
                    <div className="sidebar">
                        <div className="">
                            {
                                categories.map(category => 
                                    {
                                        return (
                                        <div>
                                            <div>{ category.name }</div>
                                            <div>{products.filter(product => product.categoryId === category.id).length}</div>
                                        </div>
                                        )
                                    }  
                                )
                            }
                        </div>
                    </div>
                    <div className="content">
                        {
                            categoryProductsList.map(product => {
                                return <div className="content-product">
                                    <div className="product-img">
                                        <Link to={`/product/${product.id}`}>
                                            <img className="item-image" src={`../..${product.img}`} alt={product.name}/>
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
        )
    }
}

let mapStateToProps = state => ({ categories: state.categories, products: state.products });
  
let Category = connect(mapStateToProps)(CategoryWrapper)

export default Category;
