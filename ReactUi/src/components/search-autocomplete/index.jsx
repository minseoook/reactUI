import { useEffect, useState } from "react";
import DropDown from "./dropDown";

// 일단 먼저 상태값 생각하자
// 상태는 검색을 위한 상태, 그리고 검색어로 filter가 있으면 아래에 리스트를 보여주기 위한 불리언 상태
// 그리고 필터된 유저를 위한 상태
// 온체인지에서 검색어 변할때마다 필터하고 필터된 배열을 저장하고 그걸 리스트로 뿌려준다
// 만약 리스트가 클릭이되면 검색어 변경하고 필터배열 없애고, 불리언도 false로 한다
// 프랍스로 내려주긴 많아서 부모에서 클릭메서드 처리하고 자식에서 클릭된걸 알려면
// e.target.innerText를 사용한다
const SearchAutoComplete = () => {
  const [users, setusers] = useState([]);
  const [search, setsearch] = useState("");
  const [showdropdown, setshowdropdown] = useState(false);
  const [filterusers, setfilterusers] = useState([]);

  const handleChange = (e) => {
    setsearch(e.target.value.toLowerCase());
    if (e.target.value.toLowerCase()) {
      const filter = users.filter(
        (users) =>
          users.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1
      );
      setfilterusers(filter);
      setshowdropdown(true);
    } else {
      setshowdropdown(false);
    }
  };

  const fetchUser = async () => {
    try {
      const res = await fetch("https://dummyjson.com/users");
      const data = await res.json();
      setusers(data.users.map((a) => a.firstName));
    } catch (e) {
      console.log(e);
    }
  };

  const handleClick = (e) => {
    setshowdropdown(false);
    setfilterusers([]);
    setsearch(e.target.innerText);
  };
  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div>
      <input
        name="search-users"
        type="text"
        placeholder="이름 입력"
        value={search}
        onChange={handleChange}
      />
      {showdropdown && <DropDown data={filterusers} onClick={handleClick} />}
    </div>
  );
};

export default SearchAutoComplete;
