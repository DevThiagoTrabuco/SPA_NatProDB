import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";

import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Catalog from "./pages/Catalog.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Molecule from "./pages/Molecule.jsx";
import Teste from "./pages/Teste.jsx";
import Error from "./pages/Error.jsx";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/molecules",
        element: <Catalog />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/molecule/:id",
        element: <Molecule />,
      },
      {
        path: "/teste",
        element: <Teste />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
