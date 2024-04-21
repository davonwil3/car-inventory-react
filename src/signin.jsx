    import React from 'react';
    import Navbar from './components/navbar';
    import './styles.css'
    import { useNavigate } from 'react-router-dom';

    function SignIn() {

        const navigate = useNavigate(); 

        const [email, setEmail] = React.useState('adam@gmail.com');
        const [password, setPassword] = React.useState('freshman2');

        const saveToken = (token) => {
            localStorage.setItem('jwtToken', token);
        };
    
        function handleSubmit(event) {
            event.preventDefault();
            const form = event.target;
            const data = {
                email: form.email.value,
                password: form.password.value,
            };
            
            fetch('https://car-dealership-ip30.onrender.com/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            }).then(response => response.json())
            .then(data => {
                localStorage.removeItem('jwtToken');
                saveToken(data.access_token);
                console.log(data);
                navigate('/dashboard'); 
            });
        }
  
        return (
            <div>
                <Navbar />

                <div class="signup-home">
                    <h1 style={{color : 'white'}}>Sign In</h1>
                    <div id="sign-in" style={{marginBottom: "70px"}}>
                        <form  className='signin-form' onSubmit={handleSubmit}>
                            <label for="email">Email:</label><br />
                            <input type="text" value={email} id="email" name="email"  onChange={(e) => setEmail(e.target.value)}  /><br />
                            <label for="password" style={{marginTop: '30px'}}>Password:</label><br />
                            <input type="password" value={password} id="password" name="password"  onChange={(e) => setPassword(e.target.value)} /><br /><br />
                            <input type="submit" value="Submit" />
                          
                        </form>
                    </div>
                </div>

            </div>
            
        );
    }

    export default SignIn;
