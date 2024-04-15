import "./App.css";
import Accordian from "./components/accordian";
import ImageSlider from "./components/imageSlider";
import LightDarkMode from "./components/light-dark-mode";
import LoadMoreButton from "./components/loadMoreButton";
import Modaltest from "./components/modal/modaltest";
import ScrollIndicator from "./components/scroll-indicator";
import Tab from "./components/tab";
import TabTest from "./components/tab/tab-test";

function App() {
  return (
    <div>
      {/* <Accordian />
      <ImageSlider url={"https://picsum.photos/v2/list"} />
      <LoadMoreButton />
      <LightDarkMode /> */}
      {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} /> */}
      {/* <TabTest /> */}
      <Modaltest />
    </div>
  );
}

export default App;
