import FoodItem from "./foodItem";
import styles from "./FoodList.module.css";

export default function FoodList({ food, setFoodid }) {
  return (
  <div className={styles.container}>
      <h1 className={styles.heading}>Food List</h1>

      <div className={styles.foodGrid}>
        {food.map((item) => (
          <FoodItem
            key={item.id}
            food={item}
            setFoodid={setFoodid}
          />
        ))}
      </div>
    </div>
  );
}
