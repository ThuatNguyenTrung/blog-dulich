import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";

import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import PlacesRoute from "./pages/PlacesRoute";
import BlogsRoute from "./pages/BlogsRoute";

import About from "./pages/About";
import BlogsDetail from "./pages/BlogsDetail";
import PlacesDetail from "./pages/PlacesDetail";
const App = () => {
  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 1000,
      easing: "ease-in-sine",
      delay: 100,
    });
  });

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/places" element={<PlacesRoute />} />
            <Route path="/blogs" element={<BlogsRoute />} />
            <Route path="/about" element={<About />} />
            <Route path="/blogs/:id" element={<BlogsDetail />} />
            <Route path="/places/:id" element={<PlacesDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
