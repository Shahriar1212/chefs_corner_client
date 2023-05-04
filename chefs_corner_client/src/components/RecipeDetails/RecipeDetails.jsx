import React from 'react';
import Rating from 'react-rating';
import { FaStar, FaRegStar, FaClock, FaClipboardList } from "react-icons/fa";
import { useLoaderData } from 'react-router-dom';
import './RecipeDetails.css'

const RecipeDetails = () => {

    const data = useLoaderData();
    console.log(data);
    return (
        <div>
            <section className='container'>

                <div className="row">
                    <div className="col-md-6">
                        <img className='img-fluid' src={data.img} alt="" />
                    </div>
                    <div className="col-md-6">
                        <div className="recipe-info">
                            <h2>{data.recipe_name}</h2>
                            <div className='mt-3 flex-grow-1 d-flex align-items-center'>
                                <Rating
                                    placeholderRating={data.rating}
                                    readonly
                                    emptySymbol={<FaRegStar></FaRegStar>}
                                    placeholderSymbol={<FaStar></FaStar>}
                                    fullSymbol={<FaStar></FaStar>} />
                            </div>

                            <p className='mt-3'><FaClock></FaClock>  Ready in : {data.time}</p>
                            <p><FaClipboardList></FaClipboardList>  Ingredients : {data.ingredients.length}</p>
                        </div>
                    </div>
                </div>

                <div className='hr'></div>

                <div className="row">
                    <div className="col-md-6">
                        <h2>Ingredients</h2>
                        {
                            data.ingredients.map(x => <ul key={x.index} class="list-group w-75">
                                <li className='list-group-item'>{x}</li>
                            </ul>)
                        }
                    </div>

                    <div className="col-md-6">
                        <h2>Cooking Steps</h2>
                        {
                            data.cooking_steps.map(x => <ol key={x.index} class="list-group w-100">
                                <li className='list-group-item'>{x}</li>
                            </ol>)
                        }
                    </div>
                </div>
            </section>

            


        </div>
    );
};

export default RecipeDetails;