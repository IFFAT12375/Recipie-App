import { useState } from "react";
import Search from "./components/Search"
import FoodList from "./components/foodList";
import Nav from "./components/Nav";


function App() {
  const[food, setFood] = useState([]);

  return (
    <div>
      <Nav />
      <Search setFood={setFood} />
      <FoodList food={food} />
    </div>
  )
}

export default App
