import React from 'react';
import './RecipeCard.css'
import { Link } from 'react-router-dom';
const RecipeCard = (props) => {

    const { recipe_name, img, id } = props.recipe;
    return (
        <div className='single-recipe-card col-md-4'>
            <img className='recipe-image img-fluid' src={img} alt="" />
            <h5 className='recipe-name '>{recipe_name}</h5>
            <Link to={`/recipe/${id}`} className='btn btn-info'>View Details</Link>
        </div>
    );
};

export default RecipeCard;