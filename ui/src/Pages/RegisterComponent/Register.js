import { Link } from 'react-router-dom';
import './Register.css';
import { useState } from 'react';
import axios from 'axios';

var Register = () => {

    const [name,setName]=useState();
    const [email,setEmail]=useState();
    const [age,setAge]=useState();
    const [address,setAddress]=useState();
    const [userName,setUserName]=useState();
    const [password,setPassword]=useState();

    const submitHandler=(e)=>{
        e.preventDefault();
        var data={name,email,age,address,userName,password};
        var url="http://localhost:3002/register";
        axios.post(url,data).then((result)=>{
            console.log("SuccessFully Send");
            setName("");
            setEmail("");
            setAge("");
            setAddress("");
            setUserName("");
            setPassword("");

        }).catch((err)=>{
            console.log("error occured");
        });
    }

    return (
        <div className='container-fluid'>
            <div className=' row register-page' >
                <div className='col-md-8 offset-md-2 col-12 my-register-form'>
                    <form  method="post" onSubmit={submitHandler} >
                        <h1>Sign Up </h1>
                        <div >
                            <input type='text' placeholder='Full Name' value={name} onChange={(e)=>{
                                setName(e.target.value);
                            }}  required />
                            <input type='email' placeholder='Email ' value={email}  onChange={(e)=>{
                                setEmail(e.target.value);
                            }} required />

                        </div>

                        <div >
                            <input type='number' placeholder='Age' value={age}  onChange={(e)=>{
                                setAge(e.target.value);
                            }} required />
                            <input type='text' placeholder='address' value={address}  onChange={(e)=>{
                                setAddress(e.target.value);
                            }} required />
                        </div>

                        <div >
                            <input type='text' placeholder='User Name' value={userName}  onChange={(e)=>{
                                setUserName(e.target.value);
                            }} required />
                            <input type='password' placeholder='Password' value={password}  onChange={(e)=>{
                                setPassword(e.target.value);
                            }} required />
                        </div>
                        <div > <input id='submit-register-btn' type='submit' value='Register' /></div>
                    </form>

                    <p className='register-link'>already Have an Account. Please <Link to="/login">LogIn</Link>  </p>
                </div>
            </div>
        </div>
    );
}

export default Register;