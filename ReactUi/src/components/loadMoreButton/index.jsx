import { useEffect, useState } from "react";
import "./index.css";

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
        <button onClick={() => setCount(count + 1)}>Load More Products</button>
      </div>
    </div>
  );
};

export default LoadMoreButton;
