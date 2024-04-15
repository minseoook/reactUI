import { useRef } from "react";
import useFetch from "../use-fetch";

export default function ScrollToTopAndBottom() {
  const { data, error, pending } = useFetch(
    "https://dummyjson.com/products?limit=100",
    {}
  );

  const bottomRef = useRef(null);

  function handleScrollToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  function handleScrollToBottom() {
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  }

  if (error) {
    return <h1>에러</h1>;
  }

  if (pending) {
    return <h1>로딩중</h1>;
  }

  return (
    <div>
      <h1>스크롤 가장 위 가장 아래 테스트</h1>
      <h3>가장 위</h3>
      <button onClick={handleScrollToBottom}>가장 아래로 이동</button>
      <ul style={{ listStyle: "none" }}>
        {data && data.products && data.products.length
          ? data.products.map((item) => <li key={item.title}>{item.title}</li>)
          : null}
      </ul>
      <button onClick={handleScrollToTop}>가장 위로 이동</button>
      <div ref={bottomRef}></div>
      <h3>가장 아래</h3>
    </div>
  );
}
