import { useContext } from "react";
import { GlobalContext } from "../../context";
import FoodItem from "../../components/foodItems";

export default function FavoritePage() {
  const { favoritesList } = useContext(GlobalContext);

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {favoritesList && favoritesList.length > 0 ? (
        favoritesList.map((item, i) => <FoodItem item={item} key={i} />)
      ) : (
        <div>
          <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
            좋아요 누른 음식이 없어요
          </p>
        </div>
      )}
    </div>
  );
}
