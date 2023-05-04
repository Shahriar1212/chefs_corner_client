import React from 'react';
import './RecipeCard.css'
const RecipeCard = (props) => {

    const { recipe_name } = props.recipe;
    return (
        <div className='single-recipe-card'>
            <img className='recipe-image img-fluid' src="../../../public/images/lawson.jpg" alt="" />
            <h2 className='recipe-name'>{recipe_name}</h2>
            <button className='btn btn-info'>View Details</button>
        </div>
    );
};

export default RecipeCard;