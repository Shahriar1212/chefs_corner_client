import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import './ChefDetails.css'
import RecipeCard from '../RecipeCard/RecipeCard';

const ChefDetails = () => {

    const data = useLoaderData();
    // console.log("loaded data is ", data);
    const chef_data = data[0]
    const recipe_data = data[1]
    console.log(recipe_data);


    return (
        <div>
            <section className='container chef-banner'>
                <div className='chef-text'>
                    <h2 className=''>Hi, I am {chef_data.chef_name}.</h2>
                    <p className='text-black'>Hi there! i am {chef_data.chef_name} I'm a passionate chef who loves creating delicious dishes for people to enjoy. I've been in the industry for {chef_data.years_of_experience} years and have honed my skills in a variety of cuisines. Whether it's a fancy dinner or a cozy meal at home, I take pride in making every dish taste amazing. Join me on this culinary journey and let's explore the world of food together!</p>
                </div>

                <img className='chef-banner-image' src={chef_data.img} alt="" />
            </section>

            <div className='container hr'></div>

            <section className="container chef-info-section">
                <div className="info-card">
                    <p className='text-black'><span className='info-bold'>{chef_data.number_of_likes} + </span> <br /> Total Likes</p>
                </div>

                <div className="info-card">
                    <p className='text-black'><span className='info-bold'>{chef_data.number_of_recipes} + </span> <br /> Number of Recipes</p>
                </div>

                <div className="info-card">
                    <p className='text-black'><span className='info-bold'>{chef_data.years_of_experience} + </span> <br /> Total years of experience</p>
                </div>
            </section>


            <section className='container chef-recipes'>
                <h3 className='text-black'>My Popular Recipes</h3>

                <div className='chefs-recipe'>


                    {
                        recipe_data.map(recipe => <RecipeCard
                            key={recipe.id}
                            recipe={recipe}
                        ></RecipeCard>)
                    }
                </div>
            </section>
        </div>
    );
};

export default ChefDetails;