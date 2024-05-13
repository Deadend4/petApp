import React from "react";
import { createRoot } from "react-dom/client";
import Root from "./router/Root/Root";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./router/LoginPage";
import ErrorPage from "./router/ErrorPage";
import MainScreenPage from "./router/MainScreenPage";

const containter = document.querySelector("#root");
const root = createRoot(containter!);
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/auth/",
    element: <LoginPage />,
  },
  {
    path: "/home",
    element: <MainScreenPage />,
    errorElement: <ErrorPage />,
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
