import { useEffect, useState } from "react";
import DropDown from "./dropDown";

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
