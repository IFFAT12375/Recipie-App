import { useEffect, useState } from "react";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_Key = "f2e3f61417df4163b17c074190c85778";
// const API_Key = "08e5d61d23d2498f9f4eee2c336ad046";


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
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />
    </div>
  );
}
