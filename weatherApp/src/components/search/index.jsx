import "./index.css";

const Search = ({ search, setsearch, handleClick }) => {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="도시를 입력하세요"
        value={search}
        onChange={(e) => setsearch(e.target.value)}
      />
      <button onClick={handleClick}>검색</button>
    </div>
  );
};

export default Search;
