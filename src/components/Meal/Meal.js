import React from 'react';
import { Link } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';

const Meal = (props) => {
    const { strMeal, strMealThumb,idMeal } = props.meal;
    return (
        <Link className='col-md-4 p-3 text-decoration-none' to={`/details/${idMeal}`}>
                <div className="card text-center rounded-3">
                    <img src={strMealThumb} alt="" />
                    <h4>{strMeal}</h4>
                </div>
        </Link>
    );
};

export default Meal;