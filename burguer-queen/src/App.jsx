//se realiza el ruteado
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Start } from "./Componentes/Home";
import { FormLogin } from "./Componentes/Login";
import { Waiter } from "./Componentes/Users";
import { Orders } from "./Componentes/Orders";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="Login" element={<FormLogin />} />
          <Route path="users" element={<Waiter />} />
          <Route path="orders" element={<Orders />} />
          {/* <Route path="*" element={<div>404 - not found</div>} /> */}
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
