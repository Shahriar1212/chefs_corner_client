import React, { useState } from 'react';
import Rating from 'react-rating';
import { FaStar, FaRegStar, FaClock, FaClipboardList } from "react-icons/fa";
import { useLoaderData } from 'react-router-dom';
import './RecipeDetails.css'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const RecipeDetails = () => {

    const [isActive, setIsActive] = useState(false);
    const data = useLoaderData();

    const handleFavorite = () => {
        setIsActive(true);
        toast("Recipi added to favorite");
    }

    console.log(data);
    return (
        <div>
            <ToastContainer />
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
                            <button className='btn btn-primary' disabled={isActive} onClick={handleFavorite}>Favorite</button>
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