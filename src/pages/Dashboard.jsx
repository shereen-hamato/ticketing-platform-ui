import React from "react";
import LogoutButton from "../components/layout/LogoutButton";

const Dashboard = () => {
    return (
        <div style={{ textAlign: "center", padding: "50px" }}>
            <h1>Welcome to Tickify Dashboard</h1>
            <p>You have successfully logged in!</p>
            <LogoutButton />
        </div>
    );
};

export default Dashboard;
