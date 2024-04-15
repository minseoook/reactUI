import { useRef, useState } from "react";
import useOutsideClick from ".";

export default function UseOnclickOutsideTest() {
  const [showContent, setShowContent] = useState(false);
  const ref = useRef();
  useOutsideClick(ref, () => setShowContent(false));

  return (
    <div>
      {showContent ? (
        <div ref={ref}>
          <h1>아무거나 아무거나</h1>
          <p>안녕안녕안뇨ㅕㅇㅇㄴ훈림ㄴ라ㅣㅠㄴ아.ㅓ흄라</p>
        </div>
      ) : (
        <button onClick={() => setShowContent(true)}>Show Content</button>
      )}
    </div>
  );
}
