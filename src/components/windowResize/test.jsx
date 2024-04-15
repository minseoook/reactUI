import useWindowResize from ".";

export default function UseWindowResizeTest() {
  const windowSize = useWindowResize();
  const { width, height } = windowSize;

  return (
    <div>
      <h1>윈도우 리사이즈 훅스</h1>
      <p>Width는 {width}</p>
      <p>Height는 {height}</p>
    </div>
  );
}
