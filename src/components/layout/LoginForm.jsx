import React, { useState } from "react";
import authApi from "../../services/authApi";

const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleLogin = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await authApi.post("/authenticate", { username, password });
            const token = response.data.token;

            // Store JWT token in localStorage
            localStorage.setItem("jwt", token);

            // Redirect to Dashboard
            window.location.href = "/events";
        } catch (err) {
            setError("Invalid username or password");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <div style={{ marginBottom: "10px" }}>
                <label>Username</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter username"
                    style={{ width: "100%", padding: "10px", marginBottom: "10px", border: "1px solid #ddd", borderRadius: "5px" }}
                />
            </div>
            <div style={{ marginBottom: "10px" }}>
                <label>Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                    style={{ width: "100%", padding: "10px", marginBottom: "10px", border: "1px solid #ddd", borderRadius: "5px" }}
                />
            </div>
            {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
            <button
                onClick={handleLogin}
                style={{
                    width: "100%",
                    padding: "10px",
                    backgroundColor: "#007bff",
                    color: "#fff",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                }}
                disabled={loading}
            >
                {loading ? "Logging in..." : "Login"}
            </button>
        </div>
    );
};

export default LoginForm;
