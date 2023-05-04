import React from 'react';
import { FaFacebookF, FaGoogle, FaGithub } from 'react-icons/fa';

const Login = () => {
    return (
        <div>
            <form className=' container mt-5 w-25'>
                <div className="form-outline mb-4">
                    <input type="email" className="form-control" />
                    <label className="form-label" >Email address</label>
                </div>

                <div className="form-outline mb-4">
                    <input type="password" className="form-control" />
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

                <button type="button" className="btn btn-primary btn-block mb-4">Sign in</button>

                <div className="text-center">
                    <p className='text-success'>Not a member? <a href="#!">Register</a></p>
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