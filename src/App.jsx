import { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/foodList";
import Nav from "./components/Nav";
import OuterContainer from "../src/components/layout/OuterContainer";

function App() {
  const [food, setFood] = useState([]);

  return (
    <OuterContainer>
      <Nav />

      <Search setFood={setFood} />

      <main>
        <FoodList food={food} />
      </main>
    </OuterContainer>
  );
}

export default App;
