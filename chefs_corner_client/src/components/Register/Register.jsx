import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';

const Register = () => {


    const {user, createUser} = useContext(AuthContext);

    const handleregister = (event) => {

        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const name = form.name.value;
        const password = form.password.value;

        console.log(name, email, password);

        createUser(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            form.reset();
        })
        .catch(error => {
            console.log(error);
        })
    }


    return (
        <div>
            <form className=' container mt-5 w-25' onSubmit={handleregister}>

            <div className="form-outline mb-4">
                    <input type="text" className="form-control" />
                    <label className="form-label" >Your Name</label>
                </div>
                <div className="form-outline mb-4">
                <input type="email" name="email" className="form-control" />
                    <label className="form-label" >Email address</label>
                </div>

                <div className="form-outline mb-4">
                <input type="password" name="password" className="form-control" />
                    <label className="form-label" >Password</label>
                </div>

                <div className="form-outline mb-4">
                    <input type="text" className="form-control" />
                    <label className="form-label" >Photo URL</label>
                </div>

                <div className="row mb-4">

                </div>

                <button className="btn btn-primary btn-block mb-4">Sign Up</button>

                <div className="text-center">
                    <p className='text-success'>Already have an account? <Link to='/login'>LogIn</Link></p>
                    
                </div>
            </form>
        </div>
    );
};

export default Register;