import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { routes } from "./UI/routes.ts";
import { RouterProvider } from "react-router-dom";
import { initIcons } from "./services/icon.ts";

initIcons()

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
