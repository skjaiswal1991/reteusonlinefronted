import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./template/app";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import configureStore from "./redux/configureStore";
import { Provider as ReduxProvider } from "react-redux";
import 'bootstrap/dist/js/bootstrap.min.js'
import $ from 'jquery';
// in ssr load store here;
const store = configureStore();
render(
  <ReduxProvider store={store}>
    <Router>
      <App />
    </Router>
  </ReduxProvider>,
  document.getElementById("app")
);
$(".toggle-menu").click(function(){
  $(".settings-rightbar").toggleClass("side-menu-onOff");
});