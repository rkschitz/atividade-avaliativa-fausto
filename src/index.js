import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import PaginaInicial from "./pages/PaginaInicial";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from "./components/Header";
import Footer from "./components/Footer";
import Sobre from "./pages/Sobre";
import Signup from "./pages/Signup";
import Calculadora from "./pages/Calculadora";
import CalculadoraJurosSimples from "./pages/CalculadoraJS";
import CalculadoraJurosCompostos from "./pages/CalculadoraJC";
import CalculadoraRegraDeTres from "./pages/CalculadoraRegraDe3";

const user = localStorage.getItem("user");

const router = createBrowserRouter([
  {
    path: "/",
    element: user ? <PaginaInicial /> : <Signup />,
    children: [
      {
        path: "/Home",
        element: user ? <PaginaInicial /> : <Signup />
      }
    ]
  },
  {
    path: "/About",
    element: user ? <Sobre /> : <Signup />
  },
  {
    path: "/signup",
    element: <Signup />
  }, 
  {
    path: "/Calculadora",
    element: user ? <Calculadora /> : <Signup />
  },
  {
    path: "/JS",
    element: user ? <CalculadoraJurosSimples /> : <Signup />
  },
  {
    path: "/JC",
    element: user ? <CalculadoraJurosCompostos /> : <Signup />
  },
  {
    path: "/R3",
    element: user ? <CalculadoraRegraDeTres /> : <Signup />
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>
);