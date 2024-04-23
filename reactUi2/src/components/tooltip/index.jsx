import { useState } from "react";
import "./index.css";
const Tooltip = () => {
  const [isVisible, setIsVisible] = useState(false);

  function handleShowTooltip() {
    setTimeout(() => {
      setIsVisible(true);
    }, 300);
  }

  function handleHideTooltip() {
    setIsVisible(false);
  }
  return (
    <div
      className="tooltip-container"
      onMouseEnter={handleShowTooltip} //마우스 커서 요소 진입
      onMouseLeave={handleHideTooltip} //마우스 커서 요소 떠날때 실행
    >
      마우스 가져와 바라
      {isVisible ? <div className="tooltip">툴팁이다</div> : null}
    </div>
  );
};

export default Tooltip;
