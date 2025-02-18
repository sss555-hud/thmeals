import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import apiClient from '../axios/apiCliant';
import flag from '../data/Flag';
import './Info.css';
import { Link } from 'react-router-dom';

const imageAPI = "https://www.themealdb.com/images/icons/flags/big/64";
const ingrAPI = "https://www.themealdb.com/images/ingredients";

function Info() {
  const { idMeal } = useParams();
  const [meals, setMeals] = useState({});
  const navigate = useNavigate();

  const findTitle = flag.find((x) => x.str === meals?.strArea);
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
  }, [idMeal]);

  let ingredient = [];

  for (let i = 1; i <= 20; i++) {
    let strName = meals["strIngredient" + i];
    let strMeasure = meals["strMeasure" + i];
    if (strName) {
      ingredient.push({ name: strName, measure: strMeasure });
    }
  }

  console.log(ingredient);

  function goToArrow(direction) {
    let nextId = direction == 'right' ? Number(idMeal) + 1 : Number(idMeal) - 1;
    navigate(`/info/${nextId}`);
  }

  return (
    <div className='info'>
      <div className='flag'>
        <h3>{meals.strMeal}</h3>
        <div className='flag-arrow'>
          <img onClick={() => goToArrow("left")} src="https://www.themealdb.com/images/icons/Arrow-Left.png" alt="" />
          <img src={`${imageAPI}/${findTitle?.title}.png`} alt="" />
          <img onClick={() => goToArrow("right")} src="https://www.themealdb.com/images/icons/Arrow-Right.png" alt="" />
        </div>
      </div>
      <div className='info-content'>
        <div className='info-left'>
          <img src={meals.strMealThumb} alt="" />
          <button className='category'>{meals.strCategory}</button>
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
  );
}

export default Info;
