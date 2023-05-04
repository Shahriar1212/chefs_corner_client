import React, { useEffect, useState } from 'react';
import ChefCard from '../ChefCard/ChefCard';
import './Home.css'
import { Link } from 'react-router-dom';

const Home = () => {


    const [chefs, setChefs] = useState([]);

    useEffect(() => {
        fetch('https://chefs-corner-server-chowdhuryshahriar12-gmailcom.vercel.app/chefs')
            .then(res => res.json())
            .then(data => setChefs(data))
            .catch(error => console.error(error))
    }, [])



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

            <section className='container'>
                <h2>Top Chefs</h2>

                <div className='chef-card'>


                    {
                        chefs.map(chef => <ChefCard
                            key={chef.chef_id}
                            chef={chef}
                        ></ChefCard>)
                    }
                </div>
            </section>


            {/* <section>
                <div className='chefs-recipe'>
                    <div className='single-recipe-card'>
                        <img className='recipe-image img-fluid' src="../../../public/images/recipe-1.jpg" alt="" />
                        <h2 className='recipe-name'>{recipe_name}</h2>
                        <Link className='btn btn-info'>View Details</Link>
                    </div>
                </div>
            </section> */}


        </div>
    );
};

export default Home;