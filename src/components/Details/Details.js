import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';

const Details = () => {

    const { id } = useParams();

    const [details, setDetails] = useState({});

    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setDetails(data.meals[0]));
    }, [id])

    const { strMeal, strMealThumb, strCategory, strInstructions, strArea, strYoutube } = details;

    return (
        <div className='container mx-auto '>
            <Link className='text-decoration-none' to='/'><h4 className='text-center bg-primary text-white p-2
            mt-2'>Home</h4></Link>
            {
                details.idMeal === id ?
                    <div className='mb-5'>
                        <img width='100%' height='300px' className='rounded-3 mt-2' src={strMealThumb} alt="" />
                        <h1>Meal Name : {strMeal}</h1>
                        <h3>Category : {strCategory}</h3>
                        <h3>Area : {strArea}</h3>
                        <p> <span className='fw-bold fs-3'>Discription : </span>{strInstructions}</p>
                        <a href={strYoutube} target='_blank'>{strYoutube}</a>
                    </div> : <CircularProgress className=' d-flex mx-auto mt-5'></CircularProgress>
            }

        </div>
    );
};

export default Details;