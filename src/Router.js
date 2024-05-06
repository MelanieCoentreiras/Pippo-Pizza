// Router.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

export default function Router() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          {/* composant route */}
          <Route path='/' element={<HomePage />} />
          {/* <HomePage /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}
