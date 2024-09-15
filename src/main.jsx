import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./utils/i18n.js";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import ProductsList from "./pages/ProductsList.jsx";
import SearchPage from "./pages/SearchPage.jsx";
import { Provider } from "react-redux";
import store from "./utils/store.js";
import ProductDetails from "./pages/ProductDetails.jsx";

const WishList = lazy(() => import("./pages/WishList.jsx"));
const Profile = lazy(() => import("./pages/Profile.jsx"));
const CartList = lazy(() => import("./pages/CartList.jsx"));
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
        element: (
          <Suspense fallback="Loading...">
            <Profile />
          </Suspense>
        ),
      },
      {
        path: "/wishlist",
        element: (
          <Suspense fallback="Loading...">
            <WishList />
          </Suspense>
        ),
      },
      {
        path: "/cartlist",
        element: (
          <Suspense fallback="Loading...">
            <CartList />
          </Suspense>
        ),
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
