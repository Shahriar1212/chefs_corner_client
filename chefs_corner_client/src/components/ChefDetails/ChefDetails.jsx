import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ChefDetails = () => {

    const x = useLoaderData();
    console.log("loaded data is ", x);
    return (
        <div>
            <h1>Chef Details</h1>
        </div>
    );
};

export default ChefDetails;