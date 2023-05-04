import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <form className=' container mt-5 w-25'>

            <div className="form-outline mb-4">
                    <input type="text" className="form-control" />
                    <label className="form-label" >Your Name</label>
                </div>
                <div className="form-outline mb-4">
                    <input type="email" className="form-control" />
                    <label className="form-label" >Email address</label>
                </div>

                <div className="form-outline mb-4">
                    <input type="password" className="form-control" />
                    <label className="form-label" >Password</label>
                </div>

                <div className="form-outline mb-4">
                    <input type="text" className="form-control" />
                    <label className="form-label" >Photo URL</label>
                </div>

                <div className="row mb-4">
                    {/* <div className="col d-flex justify-content-center">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" checked />
                            <label className="form-check-label" > Remember me </label>
                        </div>
                    </div> */}

                    {/* <div className="col">
                        <a href="#!" className='text-primary'>Forgot password?</a>
                    </div> */}
                </div>

                <button type="button" className="btn btn-primary btn-block mb-4">Sign Up</button>

                <div className="text-center">
                    <p className='text-success'>Already have an account? <Link to='/login'>LogIn</Link></p>
                    
                </div>
            </form>
        </div>
    );
};

export default Register;