import React from "react";
import Navbar from "./components/navbar";
import "./styles.css";

function SignUp() {
    return (
        <div>
            <Navbar />

            <div class="signup-home">
                <h1 style={{color : 'white'}}>Sign Up</h1>
                <div id="sign-up" style={{marginBottom: "70px"}}>
                    <form  className='signup-form'>
                        <label for="firstName" style={{marginBottom: '10px'}}>First Name:</label>
                        <input type="text" id="firstName" name="firstName" value=""  />
                        <label for="lastName" style={{marginTop: '30px'}}>Last Name:</label><br />
                        <input type="text" id="lastName" name="lastName" value="" />
                        <label for="email" style={{marginTop: '30px'}}>Email:</label><br />
                        <input type="text" id="email" name="email" value="" />
                        <label for="password" style={{marginTop: '30px'}}>Password:</label><br />
                        <input type="password" id="password" name="password" value="" /><br /><br />
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>

        </div>
        
    );
}

export default SignUp;