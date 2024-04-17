import { Link } from "react-router-dom";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useContext } from "react";
import { GlobalContext } from "../../context";
export default function FoodItem({ item }) {
  const { favoritesList, handleAddToFavorite } = useContext(GlobalContext);

  return (
    <div className="flex flex-col w-80 overflow-hidden p-5 bg-white/75 shadow-xl gap-5 border-2 rounded-2xl border-white">
      <div className="h-40 flex justify-center overflow-hidden items-center rounded-xl">
        <img src={item?.image_url} alt="recipe item" className="block w-full" />
      </div>
      <div>
        <span className="text-sm text-cyan-700 font-medium">
          {item?.publisher}
        </span>
        <h3 className="font-bold text-2xl truncate text-black">
          {item?.title}
        </h3>
        <Link
          to={`/recipe-item/${item?.id}`}
          className="text-sm p-3 mt-5 px-8 rounded-lg uppercase font-medium tracking-wider inline-block shadow-md bg-black text-white"
        >
          자세히 보기
        </Link>
        {favoritesList &&
        favoritesList.length > 0 &&
        favoritesList.findIndex((items) => items.id === item.id) !== -1 ? (
          <AiFillHeart
            onClick={() => handleAddToFavorite(item)}
            style={{ color: "red", fontSize: "30px" }}
          />
        ) : (
          <AiOutlineHeart
            onClick={() => handleAddToFavorite(item)}
            style={{ fontSize: "30px" }}
          />
        )}
      </div>
    </div>
  );
}
