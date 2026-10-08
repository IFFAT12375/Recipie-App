import FoodItem from "./foodItem";

export default function FoodList({ food }) {
  return (
    <div>
      <h1>Food List</h1>
      {food.map((item) => (
        // <div key={item.id}>
        //   <h2>{item.title}</h2>
        //   {/* <img src={item.image} alt={item.title} /> */}
        // </div>
        <FoodItem key={item.id} food={item} />
      ))}
    </div>
  );
}