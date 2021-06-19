import React from "react";
import reactDom from "react-dom";
import { Provider } from "react-redux";

import configureStore from "./store/index";
import App from "./App";

const store = configureStore();

reactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);
