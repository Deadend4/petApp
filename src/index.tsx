import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const containter = document.querySelector("#root");
const root = createRoot(containter!);
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

root.render(<RouterProvider router={router} />);
