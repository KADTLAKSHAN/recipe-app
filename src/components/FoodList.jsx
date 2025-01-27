import FoodItem from "./FoodItem";

export default function FoodList({ foodData, setFoodID }) {
  return (
    <div>
      {foodData.map((food) => (
        <FoodItem key={food.id} food={food} setFoodID={setFoodID} />
      ))}
    </div>
  );
}
