import { useEffect, useState } from "react";
import IngredientList from "./IngredientList";
import styles from "./foodDetails.module.css";

export default function FoodDetails({ foodid }) {
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  const URL = `https://api.spoonacular.com/recipes/${foodid}/information`;
  const API_Key = "26100debfd4a49e786785252b63e7a1e";

  useEffect(() => {
    if (!foodid) return;

    setLoading(true);

    async function fetchRecipe() {
      try {
        const response = await fetch(`${URL}?apiKey=${API_Key}`);

        const data = await response.json();

        console.log(data);

        setRecipe(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchRecipe();
  }, [foodid]);

  return (
  <section className={styles.container}>
      <h1 className={styles.mainHeading}>Food Details</h1>

      {loading ? (
        <p>Loading recipe...</p>
      ) : recipe ? (
        <>
          <div className={styles.header}>
            <img
              className={styles.image}
              src={recipe.image}
              alt={recipe.title}
            />

            <div className={styles.info}>
              <h2>{recipe.title}</h2>

              <p>
                Ready in {recipe.readyInMinutes} minutes
              </p>

              <p>
                Servings: {recipe.servings}
              </p>

              <p>
                Health Score: {recipe.healthScore}
              </p>

              <p>
                Price per serving: $
                {recipe.pricePerServing}
              </p>
            </div>
          </div>

          <div className={styles.dietary}>
            <span>
              Vegetarian: {recipe.vegetarian ? "Yes" : "No"}
            </span>

            <span>
              Vegan: {recipe.vegan ? "Yes" : "No"}
            </span>

            <span>
              Gluten Free: {recipe.glutenFree ? "Yes" : "No"}
            </span>

            <span>
              Dairy Free: {recipe.dairyFree ? "Yes" : "No"}
            </span>
          </div>

          <section className={styles.summary}>
            <h2>About this recipe</h2>

            <div
              dangerouslySetInnerHTML={{
                __html: recipe.summary,
              }}
            />
          </section>

          <IngredientList
            ingredients={recipe.extendedIngredients}
          />

          <section className={styles.steps}>
            <h2>Instructions</h2>

            <ol>
              {recipe.analyzedInstructions?.[0]?.steps?.map(
                (step) => (
                  <li key={step.number}>
                    {step.step}
                  </li>
                )
              )}
            </ol>
          </section>

          <a
            href={recipe.sourceUrl}
            target="_blank"
            rel="noreferrer"
          >
            View Original Recipe
          </a>
        </>
      ) : (
        <p>No recipe found.</p>
      )}
    </section>
  );
}
