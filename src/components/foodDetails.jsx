import { useEffect, useState } from "react";

export default function FoodDetails({ foodid }) {
  const [recipe, setRecipe] = useState(null);

  const URL = `https://api.spoonacular.com/recipes/${foodid}/information`;
  const API_Key = `YOUR_API_KEY`;

  useEffect(() => {
    if (!foodid) return;

    async function fetchRecipe() {
      try {
        const response = await fetch(
          `${URL}?apiKey=${API_Key}`
        );

        const data = await response.json();

        console.log(data);
        setRecipe(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchRecipe();
  }, [foodid]);

  return (
    <div>
      <h1>Food Details</h1>

      {recipe && (
        <>
          {/* Basic information */}
          <h2>{recipe.title}</h2>

          <img
            src={recipe.image}
            alt={recipe.title}
          />

          <p>
            Ready in: {recipe.readyInMinutes} minutes
          </p>

          <p>
            Servings: {recipe.servings}
          </p>

          <p>
            Price per serving: ${recipe.pricePerServing}
          </p>

          <p>
            Health Score: {recipe.healthScore}
          </p>

          {/* Dietary information */}
          <h2>Dietary Information</h2>

          <p>
            Vegetarian: {recipe.vegetarian ? "Yes" : "No"}
          </p>

          <p>
            Vegan: {recipe.vegan ? "Yes" : "No"}
          </p>

          <p>
            Gluten Free: {recipe.glutenFree ? "Yes" : "No"}
          </p>

          <p>
            Dairy Free: {recipe.dairyFree ? "Yes" : "No"}
          </p>

          {/* Categories */}
          <h2>Categories</h2>

          <p>
            Cuisines: {recipe.cuisines?.join(", ")}
          </p>

          <p>
            Dish Types: {recipe.dishTypes?.join(", ")}
          </p>

          <p>
            Diets: {recipe.diets?.join(", ")}
          </p>

          {/* Summary */}
          <h2>About this recipe</h2>

          <div
            dangerouslySetInnerHTML={{
              __html: recipe.summary,
            }}
          />

          {/* Ingredients */}
          <h2>Ingredients</h2>

          <ul>
            {recipe.extendedIngredients?.map((ingredient) => (
              <li key={ingredient.id}>
                {ingredient.original}
              </li>
            ))}
          </ul>

          {/* Instructions */}
          <h2>Steps</h2>

          <ol>
            {recipe.analyzedInstructions?.[0]?.steps?.map(
              (step) => (
                <li key={step.number}>
                  {step.step}
                </li>
              )
            )}
          </ol>

          {/* Original recipe */}
          <a
            href={recipe.sourceUrl}
            target="_blank"
            rel="noreferrer"
          >
            View Original Recipe
          </a>
        </>
      )}
    </div>
  );
}