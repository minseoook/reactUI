import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [searchParam, setSearchParam] = useState("");
  const [loading, setLoading] = useState(false);
  const [foods, setfoods] = useState([]);
  const [favoritesList, setFavoritesList] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`
      );
      const result = await res.json();
      setfoods(result.data.recipes);
      setLoading(false);
      setSearchParam("");
      navigate("/");
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  };
  console.log(foods);

  function handleAddToFavorite(getCurrentItem) {
    console.log("컨텍스트" + getCurrentItem.id);
    let cpyFavoritesList = [...favoritesList];
    const index = cpyFavoritesList.findIndex(
      (item) => item.id === getCurrentItem.id
    );

    if (index === -1) {
      cpyFavoritesList.push(getCurrentItem);
    } else {
      cpyFavoritesList.splice(index, 1);
    }

    setFavoritesList(cpyFavoritesList);
  }

  return (
    <GlobalContext.Provider
      value={{
        searchParam,
        setSearchParam,
        handleSubmit,
        loading,
        foods,
        handleAddToFavorite,
        favoritesList,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
