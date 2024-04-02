import React from "react";
import { createRoot } from "react-dom/client";
import App from "./router/Root/App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./router/Login";
import ErrorPage from "./router/ErrorPage";

const containter = document.querySelector("#root");
const root = createRoot(containter!);
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/auth/",
    element: <Login />,
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
