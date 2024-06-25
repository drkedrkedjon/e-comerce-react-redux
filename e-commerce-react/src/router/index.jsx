
import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Error from "../components/error/Error";
import MainContent from "../components/content/MainContent";
import ShoppingCart from "../components/shopping-card/ShoppingCart";
import LoginForm from "../components/login/LoginForm";
import ProtectedRoutes from "../components/protected-routes/ProtectedRoutes";
import ProductDetails from "../components/product-details/ProductDetails";
  
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <MainContent />,
      },
      {
        path: "/product/:id",
        element: (
          <ProtectedRoutes>
            <ProductDetails />
          </ProtectedRoutes>
        ),
      },
      {
        path: "/cart",
        element: (
          <ProtectedRoutes>
            <ShoppingCart />
          </ProtectedRoutes>
        ),
      },
      {
        path: "/login",
        element: <LoginForm />,
      },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
]);
