import React from "react";
import Navbar from "./components/navbar";
import "./styles.css";
import { useNavigate } from 'react-router-dom';

function SignUp() {
    const navigate = useNavigate();

    function signUpUser(event) {
        event.preventDefault();
        const form = event.target;
        const data = {
            firstName: form.firstName.value,
            lastName: form.lastName.value,
            email: form.email.value,
            password: form.password.value,
        };

        fetch('http://localhost:5000/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }).then(response => response.json())
        .then(data => {
            console.log(data);
            navigate('/signin');
        });
    }

    return (
        <div>
            <Navbar />

            <div class="signup-home">
                <h1 style={{color : 'white'}}>Sign Up</h1>
                <div id="sign-up" style={{marginBottom: "70px"}}>
                    <form  className='signup-form' onSubmit={signUpUser}>
                        <label for="firstName" style={{marginBottom: '10px'}}>First Name:</label>
                        <input type="text" id="firstName" name="firstName"   />
                        <label for="lastName" style={{marginTop: '30px'}}>Last Name:</label><br />
                        <input type="text" id="lastName" name="lastName"  />
                        <label for="email" style={{marginTop: '30px'}}>Email:</label><br />
                        <input type="text" id="email" name="email"  />
                        <label for="password" style={{marginTop: '30px'}}>Password:</label><br />
                        <input type="password" id="password" name="password"  /><br /><br />
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>

        </div>
        
    );
}

export default SignUp;