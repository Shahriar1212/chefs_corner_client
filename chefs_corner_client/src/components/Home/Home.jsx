import React, { useEffect, useState } from 'react';
import ChefCard from '../ChefCard/ChefCard';
import './Home.css'
import { Link } from 'react-router-dom';
import RecipeCard from '../RecipeCard/RecipeCard';
import Rating from 'react-rating';
import { FaRegStar, FaStar } from 'react-icons/fa';
import banner from '../../assets/banner.jpg';

const Home = () => {


    const [chefs, setChefs] = useState([]);
    const [recipes, setRecipes] = useState([]);
    const [editorsPick, setEditorsPick] = useState([]);

    useEffect(() => {
        fetch('https://chefs-corner-server-chowdhuryshahriar12-gmailcom.vercel.app/chefs')
            .then(res => res.json())
            .then(data => setChefs(data))
            .catch(error => console.error(error))

        fetch('https://chefs-corner-server-chowdhuryshahriar12-gmailcom.vercel.app/recipes')
            .then(res => res.json())
            .then(data => {
                setRecipes(data);
                setEditorsPick(data.slice(0, 3));
            })
            .catch(error => console.log(error))
    }, [])


    // console.log("chefs", chefs);
    // console.log("recipes", );



    return (
        <div>
            <section className='container d-flex'>
                <div className='flex-grow-2 d-flex flex-column justify-content-center align-items-center'>
                    <h2 className='w-75 text-center'>Fun and Easy to become Master Cook</h2>
                    <button className='btn btn-outline-info'>See Them All</button>
                </div>
                <div className='flex-grow-1'>
                    <img className='img-fluid' src={banner} placeholder='banner image' alt="" />
                </div>
            </section>

            <div className='container hr'></div>


            <section className='container'>
                <h2 className='text-center'>Top Chefs</h2>

                <div className='chef-card'>


                    {
                        chefs.map(chef => <ChefCard
                            key={chef.chef_id}
                            chef={chef}
                        ></ChefCard>)
                    }
                </div>
            </section>

            <div className='container hr'></div>


            <section className='container chef-recipes'>
                <h2 className='text-black text-center'>Editors Pick</h2>

                <div className='chefs-recipe'>


                    {
                        editorsPick.map(recipe => <RecipeCard
                            key={recipe.id}
                            recipe={recipe}
                        ></RecipeCard>)
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


            <div className='container hr'></div>

            <section className='container'>
            <h2 className='text-black mb-4 text-center'>Reviews</h2>

                <div className="row text-center">
                    <div className="col-md-4 mb-5 mb-md-0">
                        <div className="d-flex justify-content-center mb-4">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                                className="rounded-circle shadow-1-strong" width="150" height="150" />
                        </div>
                        <h5 className="mb-3">Maria Smantha</h5>
                        <div className='mt-3 flex-grow-1 d-flex align-items-center'>
                            <Rating className='mx-auto'
                                placeholderRating="4.5"
                                readonly
                                ac
                                activeFillColor="yellow"
                                emptySymbol={<FaRegStar color='yellow'></FaRegStar>}
                                placeholderSymbol={<FaStar color='yellow'></FaStar>}
                                fullSymbol={<FaStar color='yellow'></FaStar>} />
                        </div>
                        <p className="px-xl-3 text-black">
                            <i className="fas fa-quote-left pe-2"></i>I tried this recipe last night and it was amazing! The flavors were perfectly balanced and the dish was easy to make. Will definitely be making this again!
                        </p>

                    </div>
                    <div className="col-md-4 mb-5 mb-md-0">
                        <div className="d-flex justify-content-center mb-4">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
                                className="rounded-circle shadow-1-strong" width="150" height="150" />
                        </div>
                        <h5 className="mb-3">Lisa Cudrow</h5>
                        <div className='mt-3 flex-grow-1 d-flex align-items-center'>
                            <Rating className='mx-auto'
                                placeholderRating="3.5"
                                readonly
                                ac
                                activeFillColor="yellow"
                                emptySymbol={<FaRegStar color='yellow'></FaRegStar>}
                                placeholderSymbol={<FaStar color='yellow'></FaStar>}
                                fullSymbol={<FaStar color='yellow'></FaStar>} />
                        </div>
                        <p className="px-xl-3 text-black">
                            <i className="fas fa-quote-left pe-2"></i>This recipe was okay. It wasn't bad, but it wasn't great either. I think it could use some more seasoning and maybe a little more depth of flavor.
                        </p>

                    </div>
                    <div className="col-md-4 mb-0">
                        <div className="d-flex justify-content-center mb-4">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
                                className="rounded-circle shadow-1-strong" width="150" height="150" />
                        </div>
                        <h5 className="mb-3">John Smith</h5>
                        <div className='mt-3 flex-grow-1 d-flex align-items-center'>
                            <Rating className='mx-auto'
                                placeholderRating="3.8"
                                readonly
                                ac
                                activeFillColor="yellow"
                                emptySymbol={<FaRegStar color='yellow'></FaRegStar>}
                                placeholderSymbol={<FaStar color='yellow'></FaStar>}
                                fullSymbol={<FaStar color='yellow'></FaStar>} />
                        </div>
                        <p className="px-xl-3 text-black">
                            <i className="fas fa-quote-left pe-2"></i>I made this recipe last weekend and it turned out great! The instructions were clear and easy to follow. I added some extra veggies to the dish, which gave it a nice pop of color. I'm attaching a photo of my creation below!
                        </p>

                    </div>
                </div>
            </section>



        </div>
    );
};

export default Home;