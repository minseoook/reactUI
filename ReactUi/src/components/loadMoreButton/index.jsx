import { useEffect, useState } from "react";
import "./index.css";
// 더보기 버튼으로 상품을 계속 fetch해야함
// 일단 상태를 생각해야하는데 count를 만듬
// count가 올라가면 페치를 한번더 해서 이후 페이지 내용을 받아온다
// 그럼 배열을 이전거랑 합쳐서 products상태를 만든다
// 그러면 상품들이 쭉 나열된다
const LoadMoreButton = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);

  const fetchProducts = async () => {
    try {
      //   setLoading(true);
      const res = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const result = await res.json();

      if (result.products) {
        setProducts((prev) => [...prev, ...result.products]);
        setLoading(false);
      }
    } catch (err) {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, [count]);

  if (loading) {
    return <div>로딩중</div>;
  }
  console.log(products);
  return (
    <div className="load-more-container">
      <div className="product-container">
        {products && products.length
          ? products.map((item) => (
              <div className="product" key={item.id}>
                <img src={item.thumbnail} alt={item.title} />
                <p>{item.title}</p>
              </div>
            ))
          : null}
      </div>
      <div className="button-container">
        <button onClick={() => setCount(count + 1)}>상품더보기</button>
      </div>
    </div>
  );
};

export default LoadMoreButton;
