import { useEffect, useState } from "react";
import styles from "./Search.module.css";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
// const API_Key = "f2e3f61417df4163b17c074190c85778";
// const API_Key = "08e5d61d23d2498f9f4eee2c336ad046";
  const API_Key = "26100debfd4a49e786785252b63e7a1e";



export default function Search({ setFood }) {
  const [query, setQuery] = useState("pasta");

  useEffect(() => {
    const timer = setTimeout(() => {
      async function fetchFood() {
        try {
          const response = await fetch(
            `${URL}?query=${query}&apiKey=${API_Key}`,
          );

          const data = await response.json();
          console.log(data.results);

          setFood(data.results);
        } catch (error) {
          console.error(error);
        }
      }

      fetchFood();
    }, 500);
    return () => clearTimeout(timer);
  }, [query, setFood]);

  return (
   <section className={styles.outerContainer}>
            <div className={styles.innerContainer}>
                <div className={styles.content}>
                    <h1>Find Your Next Favourite Recipe</h1>

                    <p>
                        Search thousands of delicious recipes and discover
                        something new to cook.
                    </p>

                    <div className={styles.searchBox}>
                        <input
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search for a recipe..."
                        />

                        <button type="button">
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </section>
  );
}
