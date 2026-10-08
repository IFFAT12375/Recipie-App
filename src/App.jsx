import { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/foodList";
import Nav from "./components/Nav";
import OuterContainer from "../src/components/layout/OuterContainer";
import InnerContainer from "../src/components/layout/InnerContainer";
import FoodDetails from "./components/foodDetails";
import styles from "./App.module.css";

function App() {
  const [food, setFood] = useState([]);

  return (
    <OuterContainer>
      <Nav />

      <Search setFood={setFood} />

      <InnerContainer>
        <main className={styles.content}>
          <FoodList food={food} />
          <FoodDetails />
        </main>
      </InnerContainer>
    </OuterContainer>
  );
}

export default App;
