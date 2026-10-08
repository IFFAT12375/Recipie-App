import styles from "./IngredientItem.module.css";

export default function IngredientItem({ ingredient }) {
  return (
    <li className={styles.item}>
      <img
        className={styles.image}
        src={`https://img.spoonacular.com/ingredients_100x100/${ingredient.image}`}
        alt={ingredient.name}
      />

      <div className={styles.content}>
        <h3>{ingredient.nameClean}</h3>

        <p>{ingredient.original}</p>
      </div>
    </li>
  );
}