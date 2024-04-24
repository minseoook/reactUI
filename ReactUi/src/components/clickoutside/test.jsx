import { useRef, useState } from "react";
import useOutsideClick from ".";

export default function UseOnclickOutsideTest() {
  const [showContent, setShowContent] = useState(false);
  const ref = useRef();

  useOutsideClick(ref, () => setShowContent(false));

  return (
    <div>
      <button onClick={() => setShowContent(!showContent)}>
        {showContent ? "Hide Content" : "Show Content"}
      </button>
      {showContent && (
        <div ref={ref}>
          <h1>아무거나 아무거나</h1>
          <p>안녕안녕안뇨ㅕㅇㅇㄴ훈림ㄴ라ㅣㅠㄴ아.ㅓ흄라</p>
        </div>
      )}
    </div>
  );
}
//토글 버튼으로 클릭마다 컨텐츠 보이게
