import { useEffect, useState } from "react";
import styles from "./fooddetails.module.css";
import ItemList from "./ItemList";

export default function FoodDetails({ foodID }) {
  const URL = `https://api.spoonacular.com/recipes/${foodID}/information`;
  const API_KEY = import.meta.env.VITE_API_KEY; //Add your API key in here

  const [food, setFood] = useState({});
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
      setLoading(false);
    }

    fetchFood();
  }, [foodID]);

  return (
    <div>
      <div className={styles.recipeCard}>
        <h1 className={styles.recpieName}>{food.title}</h1>

        <img className={styles.recipeImage} src={food.image} />
        <div className={styles.recpieDetails}>
          <span>
            <strong>⏰{food.readyInMinutes} Minutes</strong>
          </span>
          <span>
            <strong>👨‍👨‍👧Serves {food.servings}</strong>
          </span>
          <span>
            <strong>
              {food.vegetarian ? "🥦 Vegetarian" : "🥩 Non-Vegetarian"}
            </strong>
          </span>
          <span>
            <strong>{food.vegan ? "🥕 Vegan" : ""}</strong>
          </span>
        </div>

        <div>
          💲{" "}
          <span>
            <strong>
              {(food.pricePerServing / 100).toFixed(2)} Per Serving
            </strong>
          </span>
        </div>

        <h2>Ingredients</h2>
        <ItemList food={food} isLoading={isLoading} />

        <h2>Instructions</h2>
        <div className={styles.recpieInstruction}>
          <ol>
            {isLoading ? (
              <p>Instructions Loading...</p>
            ) : (
              food.analyzedInstructions[0].steps.map((step) => (
                <li>{step.step}</li>
              ))
            )}
          </ol>
        </div>
      </div>
    </div>
  );
}
