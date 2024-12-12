import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./pages/HomePage";
import { Provider } from "react-redux";
import RouterPage from "./RouterPage";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <RouterPage />
  </Provider>
);
