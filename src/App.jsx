import "./App.css";
import Accordian from "./components/accordian";
import ImageSlider from "./components/imageSlider";
import LightDarkMode from "./components/light-dark-mode";
import LoadMoreButton from "./components/loadMoreButton";
import ScrollIndicator from "./components/scroll-indicator";

function App() {
  return (
    <div>
      {/* <Accordian />
      <ImageSlider url={"https://picsum.photos/v2/list"} />
      <LoadMoreButton />
      <LightDarkMode /> */}
      <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} />
    </div>
  );
}

export default App;
