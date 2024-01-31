import React, { useState } from "react";
import Navbar from "./components/navbar";
import "./styles.css";
import GetCars from "./components/getcars";
import UpdateCar from "./components/updatecar";
import AddNewCar from "./components/addnewcar";
import DeleteCar from "./components/deletecar";
import { Link } from "react-router-dom";

function Dashboard() {

    const [dashboardRender, setDashboard] = useState(<GetCars />);
    function getCar(event) {
        event.preventDefault();
        setDashboard(<GetCars />);
    }
    function addCar(event) {
        event.preventDefault();
        setDashboard(<AddNewCar />);
    }
    function updateCar(event) {
        event.preventDefault();
        setDashboard(<UpdateCar />);
    }
    function deleteCar(event) {
        event.preventDefault();
        setDashboard(<DeleteCar />);
    }

    return (
        <div>
            <Navbar />

            <div class="dashboard-container">
                <div class="dashboard">
                    <div class="left-panel">
                        <h2>Lerolo</h2>
                        <a href="" onClick={addCar} >Add a car</a>
                        <a href="" onClick={deleteCar}>Delete a car</a>
                        <a href="" onClick={getCar}>Get all cars</a>
                        <a href="" onClick={updateCar}>Update a Car</a>
                    </div>
                    <div class="dashboard-content">
                       
                        {dashboardRender}
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Dashboard;