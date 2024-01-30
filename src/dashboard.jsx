import React from "react";
import Navbar from "./components/navbar";
import "./styles.css";

function Dashboard() {
    return (
        <div>
            <Navbar />

            <div class="dashboard-container">
                <div class="dashboard">
                    <div class="left-panel">
                        <h2>Lerolo</h2>
                        <a href="">Profile Info</a>
                        <a href="">Add a car</a>
                        <a href="">Delete a car</a>
                        <a href="">Get all cars</a>
                        <a href="">Update a Car</a>
                    </div>
                    <div class="dashboard-content">
                      
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Dashboard;