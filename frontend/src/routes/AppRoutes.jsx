import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "../components/layout/Layout";
import ScrollToTop from "../components/ScrollToTop";

import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Services from "../pages/Services/Services";
import Portfolio from "../pages/Portfolio/Portfolio";
import Blog from "../pages/Blog/Blog";
import Contact from "../pages/Contact/Contact";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ProtectedRoute from "./ProtectedRoute";

function AppRoutes() {
    return (
        <BrowserRouter>

            <ScrollToTop />

            <Routes>

                <Route path="/" element={<Layout />}>

                    <Route index element={<Home />} />

                    <Route path="about" element={<About />} />

                    <Route path="services" element={<Services />} />

                    <Route path="portfolio" element={<Portfolio />} />

                    <Route path="blog" element={<Blog />} />

                    <Route path="contact" element={<Contact />} />

                    {/* Authentication  */}
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />

                </Route>

            </Routes>

        </BrowserRouter>
    );
}

export default AppRoutes;