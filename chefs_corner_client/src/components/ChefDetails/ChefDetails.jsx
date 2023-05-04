import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './ChefDetails.css'

const ChefDetails = () => {

    const x = useLoaderData();
    console.log("loaded data is ", x);
    return (
        <div>
            <section className='container chef-banner'>
                <div className='chef-text'>
                    <h2 className=''>Hi, I am {x.chef_name}.</h2>
                </div>
                
                    <img className='chef-banner-image' src={x.img} alt="" />
            </section>

            <div className='container hr'></div>

            <section className="container chef-info-section">
                <div className="info-card">
                    <p className='text-black'><span className='info-bold'>{x.number_of_likes} + </span> <br /> Total Likes</p>
                </div>

                <div className="info-card">
                    <p className='text-black'><span className='info-bold'>{x.number_of_recipes} + </span> <br /> Number of Recipes</p>
                </div>

                <div className="info-card">
                    <p className='text-black'><span className='info-bold'>{x.years_of_experience} + </span> <br /> Total years of experience</p>
                </div>
            </section>
        </div>
    );
};

export default ChefDetails;