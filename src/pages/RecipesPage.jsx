import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiClient from "../axios/apiCliant";
import "./RecipesPage.css";

function RecipesPage() {
  const { ingredient } = useParams();
  const [meals, setMeals] = useState([]);

  async function getMealsByIngredient() {
    try {
      const res = await apiClient.get(`/filter.php?i=${ingredient}`);
      setMeals(res.data.meals || []);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getMealsByIngredient();
  }, [ingredient]);

  return (
    <div className="food-wrapper">
    <div className="food-grid">
      {meals.length > 0 ? (
        meals.map((meal) => (
          <div className="food-item" key={meal.idMeal}>
            <img src={meal.strMealThumb} alt={meal.strMeal} />
            <h3>{meal.strMeal}</h3>
          </div>
        ))
      ) : (
        <p>Блюд с этим ингредиентом не найдено</p>
      )}
    </div>
  </div>  
  );
}

export default RecipesPage;