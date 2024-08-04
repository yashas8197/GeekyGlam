import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import ProductsList from "./pages/ProductsList.jsx";
import Profile from "./pages/Profile.jsx";
import WishList from "./pages/WishList.jsx";
import CartList from "./pages/CartList.jsx";
import SearchPage from "./pages/SearchPage.jsx";

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
        path: "/products/:categoryType",
        element: <ProductsList />,
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
    <RouterProvider router={router} />
  </React.StrictMode>
);
