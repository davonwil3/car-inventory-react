import React, { useState, useEffect } from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import Modal from 'react-modal';

function DeleteCar(){

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

    const [selectedCar, setSelectedCar] = useState(null);
    const [modalIsOpen, setIsOpen] = useState(false);
    const [confirmDeleteMessage, setConfirmDeleteMessage] = useState('');
    const [selectionModel, setSelectionModel] = useState([]);

    function updateRowsAfterDeletion(carId) {
        console.log("updateRowsAfterDeletion called");
        console.log(carId);
        console.log(rows);
        const newRows = rows.filter(row => row.id !== carId);
        console.log(newRows);
        setRows(newRows);
    }
    
    const handleSelectionChange = (newSelection) => {
        console.log("called");
        const selectedId = newSelection[newSelection.length - 1];
        const selectedRow = rows.find(row => row.id === selectedId);
        console.log(selectedRow);
        if (!selectedRow) {
            console.log("Selected row is undefined. Likely deleted.");
            return; // Exit early if the selected row doesn't exist (e.g., after deletion)
        }
        
        setSelectedCar({ carId: selectedRow.id });
        setConfirmDeleteMessage(`${selectedRow.brand}`);
        
        openModal();
    };

    function confirmDelete(event) {
        if (!selectedCar) return; 
    
        fetch('https://car-dealership-ip30.onrender.com/deletecars', {
            method: 'DELETE',
            headers: {
                'Authorization': 'Bearer ' + getToken(),
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(selectedCar),
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            updateRowsAfterDeletion(selectedCar.carId);
        })
        .catch(error => console.error("Failed to delete car:", error));
        
        setSelectionModel([]);
        setIsOpen(false); 
    }
    
    function openModal() {
       
        setIsOpen(true);
    }
    function cancelDelete() {
        setIsOpen(false);
    }
    


    return (
        <div style={{ height: 400, width: '90%', marginTop: '100px'}}>
            <h1>Delete a car</h1>
            <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection onRowSelectionModelChange={handleSelectionChange} selectionModel={selectionModel}  />
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={cancelDelete}
                contentLabel="Confirm Delete"
                style={{
                    overlay: {
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    },
                    content: {
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'white',
                        border: '1px solid #ccc',
                        borderRadius: '4px',
                        padding: '20px',
                        width: '300px',
                        margin: '0 auto',
                        height: '200px',
                    },
                    
                }}
            >
                <h2 className='confrirmDelete'> Are You sure you want to delete this {confirmDeleteMessage}</h2>
                <div className='button-row'>
                    <button onClick={confirmDelete}>Yes</button>
                    <button onClick={cancelDelete}>No</button>
                </div>
            </Modal>
        </div>
    );
}

export default DeleteCar;