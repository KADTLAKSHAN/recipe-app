import styles from "./foodItem.module.css";

export default function FoodItem({ food, setFoodID }) {
  return (
    <div className={styles.itemContainer}>
      <img
        className={styles.itemImage}
        src={food.image}
        alt="Food Recipe image"
      />
      <div className={styles.itemContent}>
        <p className={styles.itemName}>{food.title}</p>
      </div>
      <div className={styles.buttonContainer}>
        <button
          onClick={() => {
            console.log(food.id);
            setFoodID(food.id);
          }}
          className={styles.itemButton}
        >
          View Recipe
        </button>
      </div>
    </div>
  );
}
