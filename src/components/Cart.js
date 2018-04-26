import React from "react";
import { connect } from "react-redux";
import Navbar from "./Navbar";

let CartWrapper = ({ state, props }) => {
    console.log("PROPS", props);
    let product_id = props.match.params.id;
    console.log("PRODUCT ID", product_id);

    return (
        <div>
            <Navbar />
        </div>
    )
};

let mapStateToProps = (state, props) => (
    { state: state, props }
);

// let mapDispatchToProps = dispatch => (
//     { dispatch: dispatch}
// );
      
// let Cart = connect(mapStateToProps, mapDispatchToProps)(CartWrapper);

let Cart = connect(mapStateToProps)(CartWrapper);

export default Cart;