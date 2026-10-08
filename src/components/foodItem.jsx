import styles from "./foodItem.module.css";

export default function FoodItem({ food }) {
  return (
 <article className={styles.card}>
      <img
        className={styles.image}
        src={food.image}
        alt={food.title}
      />

      <div className={styles.content}>
        <h2>{food.title}</h2>

        <button className={styles.button}>
          View Recipe
        </button>
      </div>
    </article>
  );
}