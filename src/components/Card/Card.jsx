import React from 'react'
import './Card.css'
import {Link} from 'react-router-dom'


function Card({food}) {
  return (
    <div>
      <div className='meals'>
                    <div>
                      <Link to={`/info/${food.idMeal}`}>
                        <img className='meal-img' src={food.strMealThumb} alt={food.strMeal} />
                      </Link>
                    </div>
                    <h2>{food.strMeal}</h2>
         </div>
    </div>
  )
}

export default Card
