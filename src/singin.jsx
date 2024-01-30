    import React from 'react';
    import Navbar from './components/navbar';
    import './styles.css'

    function SignIn() {
        return (
            <div>
                <Navbar />

                <div class="signup-home">
                    <h1 style={{color : 'white'}}>Sign In</h1>
                    <div id="sign-in" style={{marginBottom: "70px"}}>
                        <form  className='signin-form'>
                            <label for="email">Email:</label><br />
                            <input type="text" id="email" name="email" value="" /><br />
                            <label for="password" style={{marginTop: '30px'}}>Password:</label><br />
                            <input type="password" id="password" name="password" value="" /><br /><br />
                            <input type="submit" value="Submit" />
                        </form>
                    </div>
                </div>

            </div>
            
        );
    }

    export default SignIn;
