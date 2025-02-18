import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import apiClient from '../axios/apiCliant';
import flag from '../data/Flag';
import './Info.css'
import { Link } from 'react-router-dom'


let imageAPI = "https://www.themealdb.com/images/icons/flags/big/64"
let ingrAPI = "https://www.themealdb.com/images/ingredients"

function Info() {
    
  const {idMeal} = useParams();
    const [meals, setMeals] = useState({});
    const findTitle = flag.find((x) => x.str == meals?.strArea);
    console.log(findTitle);
    

    async function getMealInfo() {
        try {
            const res = await apiClient.get(`/lookup.php?i=${idMeal}`);
            console.log(res);
            setMeals(res.data?.meals[0]);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
       getMealInfo();
    }, [])

    let ingredient = [] 

    for (let i = 1 ; i <= 20; i++) {
        let strName = meals["strIngredient"+i];

        let strMeasure = meals["strMeasure"+i];    
        if (strName) {
            ingredient.push({name: strName, measure: strMeasure});
        }
    }

    console.log(ingredient);
    

  return (
    <div className='info'>
       <div className='flag'>
        <h3>{meals.strMeal}</h3>
        <img src={`${imageAPI}/${findTitle?.title}.png`} alt="" />
        </div>        
        <div className='info-content'>
            <div className='info-left'>

                <img src={meals.strMealThumb} alt="" />
                <p className='cotegory'>{meals.strCategory}</p>
            </div>
            <div className='info-right'>
                    {ingredient.map((item, index) => (
                        <div key={index}>
                            <Link to={`/recipes/${item.name}`}> 
                            <img src={`${ingrAPI}/${item.name}.png`} alt="" />
                            </Link>
                            <p>{`${item.measure} ${item.name}`}</p>
                        </div>
                    ))}
                <h3>Instructions:</h3>
                <p>{meals.strInstructions}</p>
            </div>
        </div>
    </div>
  )
}

export default Info