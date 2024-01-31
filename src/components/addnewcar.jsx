import React, { useState } from 'react';

function AddNewCar() {
    const [make, setMake] = useState('');
    const [model, setModel] = useState('');
    const [year, setYear] = useState('');
    const [color, setColor] = useState('');
    const [price, setPrice] = useState('');
    const [message, setMessage] = useState('');

    const getToken = () => localStorage.getItem('jwtToken');

    function addCar(event) {
        event.preventDefault();
        const data = { make, model, year, color, price };
        
        fetch('https://car-dealership-ip30.onrender.com/addnewcar', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + getToken(),
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(() => {
            setMake('');
            setModel('');
            setYear('');
            setColor('');
            setPrice('');
            setMessage('Car added successfully!');
            setTimeout(() => setMessage(''), 3000);
        })
        .catch(() => {
            setMessage('Failed to add the car. Please try again.');
            setTimeout(() => setMessage(''), 3000);
        });
    }

    return (
        <div>
            <h1>Add a new car</h1>
            {message && <p>{message}</p>}
            <form onSubmit={addCar} className='addCarForm'>
                <label>Make</label>
                <input type="text" name="make" value={make} onChange={e => setMake(e.target.value)} required />
                <label>Model</label>
                <input type="text" name="model" value={model} onChange={e => setModel(e.target.value)} required />
                <label>Year</label>
                <input type="text" name="year" value={year} onChange={e => setYear(e.target.value)} required />
                <label>Color</label>
                <input type="text" name="color" value={color} onChange={e => setColor(e.target.value)} required />
                <label>Price</label>
                <input type="text" name="price" value={price} onChange={e => setPrice(e.target.value)} required />
                <input type="submit" value="Add Car" style={{marginTop: '40px'}}/>
            </form>
        </div>
    );
}

export default AddNewCar;
