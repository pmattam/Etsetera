import React, { Component } from "react";
import { connect } from "react-redux";

class CategoryWrapper extends Component {

    render() {
        
        let category_name = this.props.match.params.name;
        let categoryName = category_name.charAt(0).toUpperCase() + category_name.slice(1);
        let categories = this.props.categories;
        let products = this.props.products;



        return(
            <div className="main-category-div">
                <div className="category-name">
                    <h1>{categoryName}</h1>
                </div>
                <div className="category-sidebar-content">
                    <div className="sidebar">
                        <div className="">sidebar</div>
                        </div>
                    <div className="content">
                        <div>
                            categories
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

let mapStateToProps = state => ({ categories: state.categories, products: state.products });
  
let Category = connect(mapStateToProps, mapDispatchToProps)(CategoryWrapper)

export default Category;