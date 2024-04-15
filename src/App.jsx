import "./App.css";
import Accordian from "./components/accordian";
import ImageSlider from "./components/imageSlider";
import LightDarkMode from "./components/light-dark-mode";
import LoadMoreButton from "./components/loadMoreButton";

function App() {
  return (
    <div>
      <Accordian />
      <ImageSlider url={"https://picsum.photos/v2/list"} />
      <LoadMoreButton />
      <LightDarkMode />
    </div>
  );
}

export default App;
