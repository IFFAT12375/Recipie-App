import IngredientItem from "./IngredientItem";
import styles from "./IngredientList.module.css";

export default function IngredientList({ ingredients }) {
  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>Ingredients</h2>

      <ul className={styles.list}>
        {ingredients?.map((ingredient) => (
          <IngredientItem
            key={ingredient.id}
            ingredient={ingredient}
          />
        ))}
      </ul>
    </section>
  );
}