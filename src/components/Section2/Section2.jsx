import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SectionTwo.css';

const API = "https://www.themealdb.com/api/json/v1/1/search.php?s=a";

function Section2() {
    const [meals, setMeals] = useState([]);

    async function fetchMeals() {
      try {
        const res = await axios.get(API);
        
        console.log(res.data);
        setMeals(res.data.meals);
        
      } catch (error) {
        console.error(error);
      }
    }
    
    useEffect(() => {
        fetchMeals();
    }, []);

    return (
        <div className='content'>
            {meals.map((meal) => (
                    
                <div key={meal.idMeal} data={meal} className="meal-card">
                        <img src={meal.strMealThumb} alt={meal.strMeal} />
                        <h3>{meal.strMeal}</h3>
                </div>
                  
            ))}
        </div>
    );
}

export default Section2;