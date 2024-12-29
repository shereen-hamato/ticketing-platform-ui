import React from "react";
import LoginForm from "../components/layout/LoginForm";

const LoginPage = () => {
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", background: "#f7f7f7" }}>
            <div style={{ width: "400px", padding: "20px", border: "1px solid #ddd", borderRadius: "10px", background: "#fff" }}>
                <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Tickify Login</h2>
                <LoginForm />
            </div>
        </div>
    );
};

export default LoginPage;
