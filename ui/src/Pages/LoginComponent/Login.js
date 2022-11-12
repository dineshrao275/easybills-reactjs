import { Link } from 'react-router-dom';
import './Login.css';

var Login = () => {
    return (
        <div className='container-fluid'>
            <div className='row login-page' >
                <div className='my-login-form col-md-4 offset-md-4 col-12'>

                    <form action="" method="" >
                        <h1>Sign In </h1>
                        <div > <input type='text' placeholder='User Name' required /></div>
                        <div > <input type='password' placeholder='Password' required /></div>
                        <div > <input className='submit-login-btn' type='submit' value='LogIn' /></div>
                    </form>
                    <p className='register-link'>don't Have any Account <Link to="/register">Register</Link>  </p>
                </div>
            </div>
        </div>
    );
}
export default Login;