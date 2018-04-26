import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

let CategoryWrapper = ({ categories, products, props }) => {
    console.log("Props", props);
    let category_name = props.match.params.name;
    let categoryName = category_name.charAt(0).toUpperCase() + category_name.slice(1);

    let categoryId = categories.filter(category => category.title === category_name)[0].id;
    let categoryProductsList = products.filter(product => product.category.id === categoryId);

    return(
        <div className="main-category-div">
            <Navbar />
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
                                        <div>{ category.title }</div>
                                        <div>{products.filter(product => product.category.id === category.id).length}</div>
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
                                        <img className="item-image" src={product.img} alt={product.title}/>
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
    )
}

let mapStateToProps = (state, props) => ({ categories: state.categories, products: state.products, props });

let Category = connect(mapStateToProps)(CategoryWrapper)

export default Category;