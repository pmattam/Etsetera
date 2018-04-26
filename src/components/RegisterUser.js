import React from "react";
import { connect } from "react-redux";
// import { Link } from 'react-router-dom';
import { tokenToStore } from "../actions/action-functions";
import { registerUser } from "../lib/helper-functions";

let RegisterUserWrapper = ({ users, props }) => {

    console.log("USERS", users);

    let userCredentials = {};
     
    let handleSubmit = event => {
        console.log("handlesubmit", userCredentials);
        event.preventDefault();
        if(userCredentials.username && userCredentials.email && userCredentials.password) {
            registerUser(userCredentials)
                .then(res => res.json())
                .then(response => {
                    console.log("RES", response);
                    if(response.jwt) {
                        console.log(response.jwt);
                        tokenToStore(response.user.email, response.jwt);
                        console.log(props);
                        props.history.push("/");
                    } else {
                        alert("Can't Register you in");
                    }
                })
        } else {
            console.log("Email Address or Password or Username can't be empty");
        }
    };

    let readUserName = event => {
        userCredentials.username = event.target.value;
        // console.log(userCredentials);
    };

    let readEmail = event => {
        userCredentials.email = event.target.value;
        // console.log(userCredentials);
    };

    let readPassword = event => {
        userCredentials.password = event.target.value;
        // console.log(userCredentials);
    };

    return (
        <div>
            <div>
                <h1>Register New User</h1>
            </div>    
            <div>
                <form onSubmit={handleSubmit}>
                <label>
                        User Name:
                        <input type="text" name="username" onChange={readUserName} />
                    </label>
                    <label>
                        Email:
                        <input type="text" name="email" onChange={readEmail} />
                    </label>
                    <label>
                        Password:
                        <input type="password" name="password" onChange={readPassword} />
                    </label>
                        <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    )
};

let mapStateToProps = (state, props) => ({ users: state.users, props });

let mapDispatchToProps = dispatch => { 
    return { 
        tokenToStore: (identifier, token) => dispatch(tokenToStore(identifier, token))
    };
};
      
let RegisterUser = connect(mapStateToProps, mapDispatchToProps)(RegisterUserWrapper)

export default RegisterUser;
