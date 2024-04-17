import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../context";

export default function DetailPage() {
  const { id } = useParams();
  const [detailFood, setdetailFood] = useState(null);
  const { favoritesList, handleAddToFavorite } = useContext(GlobalContext);
  useEffect(() => {
    async function getRecipeDetails() {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      );
      const data = await response.json();

      console.log(data);
      if (data?.data) {
        setdetailFood(data?.data);
      }
    }

    getRecipeDetails();
  }, []);

  return (
    <div className="container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="row-start-2 lg:row-start-auto">
        <div className="h-96 overflow-hidden rounded-xl group">
          <img
            src={detailFood?.recipe?.image_url}
            className="w-full h-full object-cover block group-hover:scale-105 duration-300"
          />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <span className="text-sm text-cyan-700 font-medium">
          {detailFood?.recipe?.publisher}
        </span>
        <h3 className="font-bold text-2xl truncate text-black">
          {detailFood?.recipe?.title}
        </h3>
        <div>
          <button
            onClick={() => handleAddToFavorite(detailFood?.recipe)}
            className="p-3 px-8 rounded-lg text-sm uppercase font-medium tracking-wider mt-3 inline-block shadow-md bg-black text-white"
          >
            {favoritesList &&
            favoritesList.length > 0 &&
            favoritesList.findIndex(
              (item) => item.id === detailFood?.recipe?.id
            ) !== -1
              ? "좋아요 취소"
              : "좋아요 추가"}
          </button>
        </div>
      </div>
    </div>
  );
}
