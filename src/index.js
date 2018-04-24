import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import "./index.css";
import Routes from "./Routes";
import reducer from "./reducers/index"

const store = createStore(reducer);

let reactAppreduxStore = 
    <Provider store={store}>
        <Routes />
    </Provider>

ReactDOM.render( reactAppreduxStore, document.getElementById('root'));