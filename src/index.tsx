import React, { useEffect, useReducer } from "react";
import SignInPage from "src/router/SignInPage";
import SignUpPage from "src/router/SignUpPage";
import ErrorPage from "router/ErrorPage";
import AccountPage from "router/AccountPage";
import SettingsPage from "router/SettingsPage";
import YourPetsPage from "router/YourPetsPage";
import CalendarPage from "router/CalendarPage";
import { createRoot } from "react-dom/client";
import { AuthContext } from "context/AuthContext";
import MainScreenPage from "router/MainScreenPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthWrapper from "./router/AuthWrapper";
import authReducer from "./context/AuthReducer";
import firebase from "./clients/firebase";

const containter = document.querySelector("#root");
const root = createRoot(containter!);
const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthWrapper />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/sign-up",
        element: <SignUpPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/sign-in",
        element: <SignInPage />,
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
    ],
  },
]);
function App() {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    status: "loading",
  });
  useEffect(() => {
    const unsub = firebase.auth.onAuthStateChanged(async (user) => {
      if (user) {
        const dbUser = await firebase.database.user.getUser(user.uid);
        dispatch({
          type: "setUser",
          payload: { ...dbUser, email: user.email! },
        });
        dispatch({ type: "setStatus", payload: "authenticated" });
      } else {
        dispatch({ type: "setUser", payload: user });
        dispatch({ type: "setStatus", payload: "unauthenticated" });
      }
    });
    return () => {
      unsub();
    };
  }, []);
  return (
    <AuthContext.Provider
      value={{ user: state.user, status: state.status, dispatch }}
    >
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
