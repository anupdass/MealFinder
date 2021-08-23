import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import CircularProgress from '@material-ui/core/CircularProgress';

const Home = () => {
    
    const [search,setSearch] = useState('b');
    const [meal,setMeal] = useState([]);

    const handleSearch = item =>{
        setSearch(item.target.value);
    }

    useEffect(()=> {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`)
        .then(res => res.json())
        .then(data => setMeal(data.meals))
    },[search])

    return (
        <div className='row d-flex container mx-auto'>

            <h1 className='text-center text-primary mt-4'>Welcome TO Meal Finder</h1>
            <input className='mt-2 mb-2 p-2' onChange={handleSearch} type="text" placeholder='search your meal ...' />
            <h3 className='text-center mt-2 mb-2'>Total Result : {meal.length}</h3>

            {
               meal?.length>0 ?
               meal?.map(meal => <Meal meal={meal}></Meal>)
               :<CircularProgress value={20} className= ' d-flex mx-auto w-25 h-25 mt-3'/>
            }
        </div>
    );
};

export default Home;