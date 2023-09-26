import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

/* COMPONENTS */
import AccessLogin from "./routes/AccessLogin.tsx";
import AccessRegister from "./routes/AccessRegister.tsx";
import Home from "./routes/Home.tsx";
import App from "./App.tsx";

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
        path: "/logar",
        element: <AccessLogin />,
      },
      {
        path: "/registrar",
        element: <AccessRegister />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
