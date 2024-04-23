import React, { useEffect, useState } from "react";
import "./index.css";

function FilterProducts() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]); //카테고리 정렬용도의 상태 변하면 안됌
  const [currentSelectedCategory, setCurrentSelectedCategory] = useState("");
  const [filteredItems, setFilteredItems] = useState([]); //상품 나열 용도

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const apiResponse = await fetch("https://dummyjson.com/products", {
        method: "GET", //기본이 get이라 생략 가능하다 하지만 post는 명시 해야함
      });
      const result = await apiResponse.json();
      if (result && result.products && result.products.length > 0) {
        setProducts(result.products);
        setFilteredItems(result.products);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    setFilteredItems((prevProducts) => {
      if (!currentSelectedCategory) return products;
      return products.filter(
        (productItem) =>
          productItem.category.toLowerCase() ===
          currentSelectedCategory.toLowerCase()
      );
    });
  }, [currentSelectedCategory, products]); //똑같은 카테고리를 또 누르면 전체 상품 나열, 아니면 특정 카테고리 나열

  const uniqueCategories = Array.from(
    new Set(products.map((productItem) => productItem.category))
  );

  if (loading) {
    return <h3>로딩중</h3>;
  }

  return (
    <div className="filter-products-container">
      <div className="filter-categories-container">
        {uniqueCategories.map((uniqueCategoryItem, i) => (
          <button
            key={i}
            onClick={() =>
              setCurrentSelectedCategory((prevCategory) =>
                prevCategory === uniqueCategoryItem ? "" : uniqueCategoryItem
              )
            }
            className={`${
              currentSelectedCategory === uniqueCategoryItem ? "active" : ""
            }`}
          >
            {uniqueCategoryItem}
          </button>
        ))}
      </div>
      <ul className="list-of-products">
        {filteredItems.length > 0 ? (
          filteredItems.map((productItem) => (
            <li key={productItem.id}>
              <p>{productItem.title}</p>
              <button>{productItem.category}</button>
            </li>
          ))
        ) : (
          <p>해당 카테고리에 대한 제품이 없습니다.</p>
        )}
      </ul>
    </div>
  );
}

export default FilterProducts;
