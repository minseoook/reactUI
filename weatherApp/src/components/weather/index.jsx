import { useEffect, useState } from "react";
import Search from "../search";
import "./index.css";

const Weather = () => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const fetchdata = async (city) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e34b4c51d8c2b7bf48d5217fe52ff79e&lang=kr`
      );
      const result = await response.json();
      if (result) {
        setLoading(false);
        setData(result);
      }
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  };

  const handleFetchData = () => {
    if (search) {
      fetchdata(search);
    }
  };
  console.log(data);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      console.log("이펙트");
      handleFetchData();
    }, 1000); // 1000ms(1초) 후에 실행되도록 설정

    return () => clearTimeout(timeoutId); // cleanup 함수
  }, [search]);

  useEffect(() => {
    console.log("이펙트");
    fetchdata("seoul");
  }, []);

  const handleClick = () => {
    handleFetchData();
  };

  function getCurrentDate() {
    return new Date().toLocaleDateString("ko-KR", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }

  return (
    <div>
      <Search search={search} setsearch={setSearch} handleClick={handleClick} />
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div>
          <div className="city-name">
            <h2>
              {data?.name}, <span>의 날씨입니다!</span>
            </h2>
          </div>
          <div className="date">
            <span>{getCurrentDate()}</span>
          </div>
          <div className="temp">{`현재온도는 ${Math.floor(
            data?.main?.temp - 273.15
          )}`}</div>
          <p className="description">
            {data && data.weather && data.weather[0]
              ? data.weather[0].description
              : ""}
          </p>
        </div>
      )}
    </div>
  );
};

export default Weather;
