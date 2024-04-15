import { useEffect, useState } from "react";
import "./index.css";
const ScrollIndicator = ({ url }) => {
  const [date, setDate] = useState([]);
  const [scrollpercentage, setScrollpercentage] = useState(0);

  const fetchData = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setDate(data.products);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchData(url);
  }, [url]);

  const handleScroll = () => {
    console.log(
      document.body.scrollTop,
      document.documentElement.scrollTop,
      document.documentElement.scrollHeight,
      document.documentElement.clientHeight
    );
    const howMuchScrolled = document.documentElement.scrollTop; //얼마나 스크롤 됬는지 확인

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight; //총높이 - 현 브라우저의 높이

    setScrollpercentage((howMuchScrolled / height) * 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="top-container">
        <h1>내가 만든 스크롤 인디케이터</h1>
        <div className="scroll-progress-tracking-container">
          <div
            className="current-progress-bar"
            style={{ width: `${scrollpercentage}%` }}
          ></div>
        </div>
      </div>

      <div className="data-container">
        {date.map((data) => (
          <p key={data.id}>{data.title}</p>
        ))}
      </div>
    </div>
  );
};

export default ScrollIndicator;
