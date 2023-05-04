import React from 'react';

const Home = () => {
    return (
        <div>
            <section className='container d-flex'>
                <div className='flex-grow-2 d-flex flex-column justify-content-center align-items-center'>
                    <h2 className='w-75 text-center'>Fun and Easy to become Master Cook</h2>
                    <button className='btn btn-outline-info'>See Them All</button>
                </div>
                <div className='flex-grow-1'>
                    <img className='img-fluid' src="../../../public/images/banner.jpg" alt="" />
                </div>
            </section>

            
        </div>
    );
};

export default Home;