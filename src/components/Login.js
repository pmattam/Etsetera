import React from "react";
import { fetchToken } from "../lib/api-calls";
import { connect } from "react-redux";
import { tokenToStore } from "../actions/action-fns";
import { Link } from 'react-router-dom';

let LoginWrapper = ({ props, tokenToStore }) => {

    let userCredentials = {};
    
    let handleSubmit = event => {
        event.preventDefault();
        if(userCredentials.identifier && userCredentials.password) {
            fetchToken(userCredentials)
                .then(res => res.json())
                .then(token => {
                    console.log("USER CREDENTIALS WHEN I LOG IN", token);
                    if(token.jwt) {
                        localStorage.setItem("authorization", token.jwt);
                        tokenToStore(userCredentials.identifier, token.jwt, token.user._id);
                        props.history.push("/");
                    } else {
                        alert("Can't log you in");
                    }
                })
        } else {
            console.log("Enter valid Email Address or Password");
        }
    };

    let readEmail = event => {
        userCredentials.identifier = event.target.value;
    };

    let readPassword = event => {
        userCredentials.password = event.target.value;
    };

    return (
        <div>
            <div>
                <h1>Welcome to Esetera!!!</h1>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                        <input type="text" name="identifier" onChange={readEmail} placeholder="email" />
                        <input type="password" name="password" onChange={readPassword} placeholder="password" />
                        <input type="submit" value="Submit" />
                </form>
            </div>
            <div>
                <span>No account?</span>
                <Link to={"/register"}>Register</Link>
            </div>
        </div>
    )

};

let mapStateToProps = (state, props) => ({ state, props });

let mapDispatchToProps = dispatch =>  { 
    return {
        tokenToStore: (identifier, token, userId) => dispatch(tokenToStore(identifier, token, userId))
    };
};
      
let Login = connect(mapStateToProps, mapDispatchToProps)(LoginWrapper)

export default Login;
