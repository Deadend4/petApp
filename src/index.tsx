import React, { useState } from "react";
import { UserType } from "types/index";
import AuthPage from "router/AuthPage";
import LoginPage from "router/LoginPage";
import ErrorPage from "router/ErrorPage";
import AccountPage from "router/AccountPage";
import SettingsPage from "router/SettingsPage";
import YourPetsPage from "router/YourPetsPage";
import CalendarPage from "router/CalendarPage";
import { createRoot } from "react-dom/client";
import { AuthContext } from "context/AuthContext";
import MainScreenPage from "router/MainScreenPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const containter = document.querySelector("#root");
const root = createRoot(containter!);
const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthPage />,
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
      {
        path: "/calendar",
        element: <CalendarPage />,
      },
      {
        path: "/account",
        element: <AccountPage />,
      },
    ],
  },
]);
function App() {
  const userFromStorage = sessionStorage.getItem("user");
  const [user, setUser] = useState<UserType | null>(
    userFromStorage ? JSON.parse(userFromStorage) : null,
  );
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <RouterProvider router={router} />
    </AuthContext.Provider>
  );
}
root.render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <App />
  </React.StrictMode>,
);
