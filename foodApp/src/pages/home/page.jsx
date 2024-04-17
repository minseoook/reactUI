import { useContext } from "react";
import { GlobalContext } from "../../context";
import FoodItem from "../../components/foodItems";

export default function Home() {
  const { foods, loading } = useContext(GlobalContext);

  if (loading) return <div>로딩중입니다</div>;

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {foods && foods.length > 0 ? (
        foods.map((item, i) => <FoodItem item={item} key={i} />)
      ) : (
        <div>
          <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
            가능한 음식이 없네요...
          </p>
        </div>
      )}
    </div>
  );
}
