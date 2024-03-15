import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const containter = document.querySelector("#root");
const root = createRoot(containter!);
root.render(<App />);
