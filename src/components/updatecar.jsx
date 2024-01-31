import React, { useState, useEffect } from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';


function UpdateCar() {

    const getToken = () => {
        return localStorage.getItem('jwtToken');
    };

    const [selectionModel, setSelectionModel] = useState([]);
    const [display, setDisplay] = useState('none');

    const handleSelectionChange = (newSelection) => {
        console.log("called");
        setSelectionModel(newSelection.slice(-1));
        const selectedId = newSelection[newSelection.length - 1];
        const selectedRow = rows.find(row => row.id === selectedId);

        console.log(selectedRow); 

        document.getElementById("carId").value = selectedRow.id;
        document.getElementById("make").value = selectedRow.brand;
        document.getElementById("model").value = selectedRow.model;
        document.getElementById("year").value = selectedRow.year;
        document.getElementById("color").value = selectedRow.color;
        document.getElementById("price").value = selectedRow.price;
        openModal();
       
    };
    function openModal() {
        setDisplay('block');
    }
    function closeModal() {
        console.log("close");
       setDisplay('none');
    }

    function update(event) {
        event.preventDefault();
        const form = event.target;
        const data = {
            carId: form.carId.value,
            make: form.make.value,
            model: form.model.value,
            year: form.year.value,
            color: form.color.value,
            price: form.price.value
        };
        fetch('https://car-dealership-ip30.onrender.com/updatecars', {
            method: 'PUT',
            headers: {
                'Authorization':'Bearer ' + getToken(),
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            window.location.reload();
        });
    }

    const columns =  [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'brand', headerName: 'Brand', width: 130 },
        { field: 'model', headerName: 'Model', width: 130 },
        { field: 'year', headerName: 'Year', width: 130 },
        { field: 'color', headerName: 'Color', width: 130},
        { field: 'price', headerName: 'Price', width: 130 },
    ];
    
    const [rows, setRows] = useState([]);

    useEffect(() => {
        fetch('https://car-dealership-ip30.onrender.com/getcars', {
            method: 'GET',
            headers: {
                'Authorization':'Bearer ' + getToken(),
                'Content-Type': 'application/json',
            },
        })
        .then(response => response.json())
        .then(data => {
            const newRows = data.map(car => ({
                id: car.car_id,
                brand: car.make,
                model: car.model,
                year: car.year,
                color: car.color,
                price: car.price
            }));
            setRows(newRows);
        });
    }, []);

    return (
                <div style={{ height: 400, width: '90%', marginTop: '100px' }}>
                    <h1>Update a car</h1>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSize={5}
                        checkboxSelection
                        onRowSelectionModelChange={handleSelectionChange}
                        selectionModel={selectionModel}
                    />

                    <div id="updateCarModal" class="modal" style={{display: display}}>
                        <div class="modal-content">
                            <form id="updateCarForm" onSubmit={update}>
                                <h2>Update Car</h2>
                                <span class="close-btn" onClick={closeModal}>&times;</span>
                                <label for="carId">Car ID:</label>
                                <input type="text" id="carId" name="carId" readonly /><br /><br />
                                <label for="make">Make:</label>
                                <input type="text" id="make" name="make" /><br /><br />
                                <label for="model">Model:</label>
                                <input type="text" id="model" name="model" /><br /><br />
                                <label for="year">Year:</label>
                                <input type="text" id="year" name="year" /><br /><br />
                                <label for="color">Color:</label>
                                <input type="text" id="color" name="color" /><br /><br />
                                <label for="price">Price:</label>
                                <input type="text" id="price" name="price" /><br /><br />
                                <input type="submit" value="update" />
                            </form>
                        </div>
                    </div>
                </div>
            );
        }

        export default UpdateCar;
