import { useEffect, useState } from "react";
import "./index.css";
// 일단 상태는 하나 그건 바로 스크롤 될때마다 변하는 상태값
// 이벤트 리스너를 만들어서 스크롤될때마다 상태값 변경
// 그럼 변하는 상태값을 css로 넘겨서 width를 증가시킨다

const ScrollIndicator = () => {
  const [scrollpercentage, setScrollpercentage] = useState(0);

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
    </div>
  );
};

export default ScrollIndicator;
