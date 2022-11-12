import './Contact.css';
import { useState } from 'react';

var Contact = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [contact, setContact] = useState();
    const [coq, setCOQ] = useState();
    const submitHandler = (e) => {
        e.preventDefault();
        console.log("Name : " + name);
        console.log("Email : " + email);
        console.log("Contact : " + contact);
        console.log("Comment Or Query : " + coq);

    }
    return (
        <div className='container-fluid'>

            <div className='row contact-page'>

                <div className=' col-md-10 offset-md-1 col-12 myform'>
                    <div className='row '>
                        <div className='col-md-6   col-0 contact-image'>
                            <img src='./assets/images/customer1.png' alt='' className='image-fluid' />
                        </div>
                        <div className='col-md-4 offset-md-1 col-12'>
                            <form action="" method="" onSubmit={submitHandler}>
                                <h1>Contact us </h1>
                                <div > <input type='text' placeholder='Full Name' onChange={(e) => setName(e.target.value)} required /></div>
                                <div > <input type='email' placeholder='Email here' onChange={(e) => setEmail(e.target.value)} required /></div>
                                <div > <input type='contactno' placeholder='mobile no ' onChange={(e) => setContact(e.target.value)} required /></div>
                                <div > <input type='text' placeholder='comment or Query' onchange={(e) => setCOQ(e.target.value)} required /></div>
                                <div > <button className='btn btn-outline-secondary' type='submit'><b>Send</b></button></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;