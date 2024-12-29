import React from "react";

const LogoutButton = () => {
    const handleLogout = () => {
        localStorage.removeItem("jwt");
        window.location.href = "/";
    };

    return (
        <button
            onClick={handleLogout}
            style={{
                padding: "10px 20px",
                backgroundColor: "#dc3545",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
            }}
        >
            Logout
        </button>
    );
};

export default LogoutButton;
