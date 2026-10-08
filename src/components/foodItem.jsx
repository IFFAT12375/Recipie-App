export default function FoodList({ food }) {
  return (
    <>
          <h2>{food.title}</h2>
          <img src={food.image} alt={food.title} />
    </>
  );
}