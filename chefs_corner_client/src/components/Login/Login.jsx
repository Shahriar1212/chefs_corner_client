import React, { useContext } from 'react';
import { FaFacebookF, FaGoogle, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';

const Login = () => {


    const { signIn, signInWithGoogle } = useContext(AuthContext);

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        signIn(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .catch(error => {
            console.log(error);
        })

    }

    return (
        <div>
            <form className=' container mt-5 w-25' onSubmit={handleLogin}>
                <div className="form-outline mb-4">
                    <input type="email" name="email" className="form-control" />

                    <label className="form-label" >Email address</label>
                </div>

                <div className="form-outline mb-4">
                    <input type="password" name="password" className="form-control" />
                    <label className="form-label" >Password</label>
                </div>

                <div className="row mb-4">
                    {/* <div className="col d-flex justify-content-center">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" checked />
                            <label className="form-check-label" > Remember me </label>
                        </div>
                    </div> */}

                    <div className="col">
                        <a href="#!" className='text-primary'>Forgot password?</a>
                    </div>
                </div>

                <button className="btn btn-primary">Login</button>


                <div className="text-center">
                    <p className='text-success'>Not a member? <Link to="/register">Register</Link></p>
                    <p className='text-success'>or sign up with</p>
                    <button type="button" className="btn btn-link btn-floating mx-1">
                        <FaGoogle />
                    </button>

                    <button type="button" className="btn btn-link btn-floating mx-1">
                        <FaFacebookF />
                    </button>

                    <button type="button" className="btn btn-link btn-floating mx-1">
                        <FaGithub />
                    </button>


                </div>
            </form>
        </div>
    );
};

export default Login;