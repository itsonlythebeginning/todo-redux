import "./style.css"
import React from "react"
import ReactDOM from "react-dom/client"
import {Provider} from "react-redux";
import App from "./App.jsx";
import {store} from "./store/store.jsx";

const el = document.getElementById("root")


const root = ReactDOM.createRoot(el)


root.render(
    <Provider store={store}>
        <App/>
    </Provider>
)
