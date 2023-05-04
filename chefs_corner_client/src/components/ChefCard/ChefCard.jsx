import React from 'react';
import './ChefCard.css'
import { FaThumbsUp } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ChefCard = (props) => {
    const { chef_id, chef_name,img, years_of_experience, number_of_recipes, number_of_likes } = props.chef;

    // console.log(chefs.length);
    return (
        <div className='chef-singl-card'>
            <img className='chef-card-image img-fluid' src={img} alt="" />
            <h3 className='text-black'>{chef_name}</h3>
            <p className='text-black'>Year of Experience: {years_of_experience}</p>
            <p className='text-black'>Number of Recipes: {number_of_recipes}</p>

            <div className='like-recipe-btn'>
                <div className='d-flex align-items-center'>
                <p className='text-black'>Likes: {number_of_likes} <FaThumbsUp></FaThumbsUp></p>
                
                
                </div>
                <Link to={`chef/${chef_id}`} className='btn btn-primary'>View Recipes</Link>
            </div>
        </div>
    );
};

export default ChefCard;