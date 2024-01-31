import React, { useState, useEffect } from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

function GetCars() {

    const getToken = () => {
        return localStorage.getItem('jwtToken');
    };

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
            console.log(data);
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
        <div style={{ height: 400, width: '90%', marginTop: '100px'}}>
            <h1>All cars</h1>
            <DataGrid rows={rows} columns={columns} pageSize={5} />
        </div>
    );
}

export default GetCars;