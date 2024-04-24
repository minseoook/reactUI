import { useEffect, useState } from "react";
import useDebounce from "./hook";
import "./index.css";

function DebounceApiCall() {
  const [searchParam, setSearchParam] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [pending, setPending] = useState(false);

  const debounceParamValue = useDebounce(searchParam);

  async function fetchListOfRecipes() {
    try {
      setPending(true);
      const apiResponse = await fetch(
        `https://dummyjson.com/recipes/search?q=${debounceParamValue}`
      );
      const result = await apiResponse.json();

      if (result && result.recipes && result.recipes.length > 0) {
        setPending(false);
        setRecipes(result.recipes);
      } else {
        setPending(false);
        setRecipes([]);
      }
    } catch (error) {
      console.log(error);
      setPending(false);
    }
  }

  useEffect(() => {
    fetchListOfRecipes();
  }, [debounceParamValue]);

  return (
    <div className="debounce-container">
      <h1>Debouce API Call</h1>
      <div className="search-wrapper">
        <input
          type="text"
          value={searchParam}
          onChange={(event) => setSearchParam(event.target.value)}
          placeholder="Enter Recipe Name"
        />
      </div>
      {pending ? <h3>기다리세요</h3> : null}
      <ul>
        {recipes && recipes.length > 0 ? (
          recipes.map((recipeItem, i) => <li key={i}>{recipeItem.name}</li>)
        ) : (
          <h3>아무것도 없네요</h3>
        )}
      </ul>
    </div>
  );
}

export default DebounceApiCall;
