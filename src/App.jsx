import { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/foodList";
import Nav from "./components/Nav";
import styles from "../src/App.module.css";

function App() {
  const [food, setFood] = useState([]);

  return (
    <div className={styles.outerContainer}>
      <Nav />

      <Search setFood={setFood} />

      <main>
        <FoodList food={food} />
      </main>
    </div>
  );
}

export default App;
