import { Link } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../../context";

const NavBar = () => {
  const { searchParam, setSearchParam, handleSubmit } =
    useContext(GlobalContext);
  return (
    <nav className="flex justify-between items-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0">
      <h2 className="text-2xl font-semibold">
        <Link to={"/"}>음식 레시피앱</Link>
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          value={searchParam}
          onChange={(event) => setSearchParam(event.target.value)}
          placeholder="재료를 입력하세요"
          className="bg-white/75 p-3 px-8 rounded-full outline-none lg:w-96 shadow-lg shadow-red-100 focus:shadow-red-200"
        />
      </form>
      <ul className="flex gap-5">
        <li>
          <Link
            to={"/"}
            className="text-black hover:text-gray-700 duration-300"
          >
            홈
          </Link>
        </li>
        <li>
          <Link
            to={"/favorites"}
            className="text-black hover:text-gray-700 duration-300"
          >
            좋아요
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
