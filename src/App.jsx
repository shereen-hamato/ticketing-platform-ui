import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import EventDetailsPage from "./pages/EventDetailsPage";

function App() {
    const isAuthenticated = !!localStorage.getItem("jwt");
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/events" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/eventid" element={<EventDetailsPage />} />
                <Route path="/" element={isAuthenticated ? <Navigate to="/dashboard" /> : <LoginPage />} />
                <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/" />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
