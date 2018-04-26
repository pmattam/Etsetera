import React from "react";
import { fetchToken } from "../lib/helper-functions";
import { connect } from "react-redux";
import { tokenToStore } from "../actions/action-functions";
import { Link } from 'react-router-dom';

let LoginWrapper = ({ props, tokenToStore }) => {

    let userCredentials = {};
    
    let handleSubmit = event => {
        console.log("handlesubmit", userCredentials);
        event.preventDefault();
        if(userCredentials.identifier && userCredentials.password) {
            fetchToken(userCredentials)
                .then(res => res.json())
                .then(token => {
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
        // console.log(userCredentials);
    };

    let readPassword = event => {
        userCredentials.password = event.target.value;
        // console.log(userCredentials);
    };

    return (
        <div>
            <div>
                <h1>Welcome to Esetera!!!</h1>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <label>
                        Email:
                        <input type="text" name="identifier" onChange={readEmail} />
                    </label>
                    <label>
                        Password:
                        <input type="password" name="password" onChange={readPassword} />
                    </label>
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
        tokenToStore: (identifier, token, userid) => dispatch(tokenToStore(identifier, token, userid))
    };
};
      
let Login = connect(mapStateToProps, mapDispatchToProps)(LoginWrapper)

export default Login;
