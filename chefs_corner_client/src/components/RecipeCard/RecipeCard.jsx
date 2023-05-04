import React from 'react';
import './RecipeCard.css'
import { Link } from 'react-router-dom';
const RecipeCard = (props) => {

    const { recipe_name, img, id } = props.recipe;
    return (
        <div className='single-recipe-card'>
            <img className='recipe-image img-fluid' src={img} alt="" />
            <h2 className='recipe-name'>{recipe_name}</h2>
            <Link to={`/recipe/${id}`} className='btn btn-info'>View Details</Link>
        </div>
    );
};

export default RecipeCard;