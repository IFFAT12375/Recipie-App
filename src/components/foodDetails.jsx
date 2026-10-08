export default function FoodDetails({ foodid }) {
  const URL = `https://api.spoonacular.com/recipes/${foodid}/information`;
  const API_Key = `f2e3f61417df4163b17c074190c85778`;

  return (
    <div>
      <h1>Food Details {foodid}</h1>
    </div>
  );
}
