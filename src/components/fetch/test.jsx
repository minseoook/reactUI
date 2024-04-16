import useFetch from ".";

export default function UseFetchHookTest() {
  const { data, error, pending } = useFetch(
    "https://dummyjson.com/products",
    {}
  );

  return (
    <div>
      <h1>내가 만든 fetch 훅</h1>
      {pending ? <h3>Pending </h3> : null}
      {error ? <h3>{error}</h3> : null}
      {data
        ? data.products.map((productItem) => (
            <p key={productItem.key}>{productItem.title}</p>
          ))
        : null}
    </div>
  );
}
