import React from "react";
import { createRoot } from "react-dom/client";
import Root from "./router/Root/Root";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./router/LoginPage";
import ErrorPage from "./router/ErrorPage";
import MainScreenPage from "./router/MainScreenPage";
import SettingsPage from "./router/SettingsPage";
import YourPetsPage from "./router/YourPetsPage";

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
    element: <MainScreenPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/home",
        element: <YourPetsPage />,
      },
      {
        path: "/settings",
        element: <SettingsPage />,
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
