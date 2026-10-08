import FoodItem from "./foodItem";
import styles from "./FoodList.module.css";

export default function FoodList({ food }) {
  return (
<section className={styles.outerContainer}>
      <div className={styles.innerContainer}>

        <h1 className={styles.heading}>
          Food List
        </h1>

        <div className={styles.list}>
          {food.map((item) => (
            <FoodItem
              key={item.id}
              food={item}
            />
          ))}
        </div>

      </div>
    </section>
  );
}