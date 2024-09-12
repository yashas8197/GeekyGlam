import React from "react";
import ReactDOM from "react-dom/client";
import "./utils/i18n.js";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import ProductsList from "./pages/ProductsList.jsx";
import Profile from "./pages/Profile.jsx";
import WishList from "./pages/WishList.jsx";
import CartList from "./pages/CartList.jsx";
import SearchPage from "./pages/SearchPage.jsx";
import { Provider } from "react-redux";
import store from "./utils/store.js";
import ProductDetails from "./pages/ProductDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <ProductsList />,
      },
      {
        path: "/product-details/:productId",
        element: <ProductDetails />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/wishlist",
        element: <WishList />,
      },
      {
        path: "/cartlist",
        element: <CartList />,
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
