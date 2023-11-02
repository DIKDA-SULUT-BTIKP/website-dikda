import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import PPDBPage from "./pages/PPDBPage";
import SOPPage from "./pages/SOPPage";
import ProfilePage from "./pages/ProfilePage";
import DetailSOPPage from "./pages/DetailSOPPage";
import { Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
import NotFound from "./pages/404";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ppdb" element={<PPDBPage />} />
          <Route path="/sop" element={<SOPPage />} />
          <Route path="/profil" element={<ProfilePage />} />
          <Route path="/sop/detail/:title" element={<DetailSOPPage />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
