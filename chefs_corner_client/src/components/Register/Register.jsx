import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';
import app from '../../firebase/firebase.config';
import { getAuth } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const auth = getAuth(app);

const Register = () => {


    const { user, createUser, update } = useContext(AuthContext);
    const navigate = useNavigate();
    const [error, setError] = useState('');


    const handleregister = (event) => {

        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const displayName = form.displayName.value;
        const photoURL = form.photo.value;
        const password = form.password.value;

        console.log(displayName, photoURL, email, password);

        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset();
                update(displayName, photoURL);
                navigate('/', { replace: true });
            })
            .catch(error => {
                console.log(error);
                setError(error.message);
                toast.warn(error.message);
            })







    }


    return (
        <div>
            <form className=' container mt-5 col-md-3 mx-auto' onSubmit={handleregister}>

                <div className="form-outline mb-4">
                    <input type="text" name="displayName" required className="form-control" />
                    <label className="form-label" >Your Name</label>
                </div>
                <div className="form-outline mb-4">
                    <input type="email" name="email" required className="form-control" />
                    <label className="form-label" >Email address</label>
                </div>

                <div className="form-outline mb-4">
                    <input type="password" name="password" required className="form-control" />
                    <label className="form-label" >Password</label>
                </div>

                <div className="form-outline mb-3">
                    <input type="text" name="photo" required className="form-control" />
                    <label className="form-label" >Photo URL</label>
                </div>


                <div className="row">
                    <p className='text-red'>{error}</p>
                </div>
                <ToastContainer />
                <button className="btn btn-primary btn-block mb-4">Sign Up</button>

                <div className="text-center">
                    <p className='text-success'>Already have an account? <Link to='/login'>LogIn</Link></p>

                </div>
            </form>
        </div>
    );
};

export default Register;