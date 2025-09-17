import React from "react";
import { Route, Routes } from "react-router-dom";
import PublicLayout from "./layouts/PublicLayout";

import Mybooking from "./pages/Mybooking";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import ViewPage from "./pages/ViewPage";

export default function App() {
  return (
    <>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="mybooking" element={<Mybooking />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="contact" element={<Contact />} />
           <Route path="view" element={<ViewPage />} />
        </Route>
      </Routes>
    </>
  );
}
