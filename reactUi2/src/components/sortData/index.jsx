import { useEffect } from "react";
import { useState } from "react";

function SortData() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sort, setSort] = useState("ascending");

  async function fetchListOfUsers() {
    try {
      setLoading(true);
      const apiResponse = await fetch(`https://dummyjson.com/users`);
      const result = await apiResponse.json();

      if (result && result.users && result.users.length > 0) {
        setUsers(result.users);
      }

      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchListOfUsers();
  }, []);

  useEffect(() => {
    console.log("first");
    console.log(sort);
    console.log(users);
    if (sort === "ascending") {
      setUsers((prevUsers) =>
        [...prevUsers].sort((firstUser, secondUser) =>
          firstUser.firstName > secondUser.firstName ? 1 : -1
        )
      );
    } else if (sort === "descending") {
      setUsers((prevUsers) =>
        [...prevUsers].sort((firstUser, secondUser) =>
          firstUser.firstName > secondUser.firstName ? -1 : 1
        )
      );
    }
  }, [sort]);

  if (loading) return <h1>Loading users! Please wait</h1>;

  return (
    <div className="sort-data-container">
      <h1>Sort Data</h1>
      <div className="sort-dropdown-container">
        <select
          value={sort}
          onChange={(event) => setSort(event.target.value)}
          name="sort"
        >
          <option value="" id="">
            Please Select Option
          </option>
          <option value="ascending" id="ascending">
            Sort A - Z
          </option>
          <option value="descending" id="descending">
            Sort Z - A
          </option>
        </select>
      </div>
      <ul>
        {users && users.length > 0
          ? users.map((userItem, i) => (
              <li key={i}>
                <p>{userItem.firstName}</p>
              </li>
            ))
          : null}
      </ul>
    </div>
  );
}

export default SortData;
