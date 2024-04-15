import "./App.css";
import Accordian from "./components/accordian";
import UseOnclickOutSideTest from "./components/clickoutside/test";
import UseFetchHookTest from "./components/fetch/test";
import ImageSlider from "./components/imageSlider";
import LightDarkMode from "./components/light-dark-mode";
import LoadMoreButton from "./components/loadMoreButton";
import Modaltest from "./components/modal/modaltest";
import ScrollIndicator from "./components/scroll-indicator";
import SearchAutoComplete from "./components/search-autocomplete";
import Tab from "./components/tab";
import TabTest from "./components/tab/tab-test";
import UseWindowResizeTest from "./components/windowResize/test";

function App() {
  return (
    <div>
      {/* <Accordian />
      <ImageSlider url={"https://picsum.photos/v2/list"} />
      <LoadMoreButton />
      <LightDarkMode /> */}
      {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} /> */}
      {/* <TabTest /> */}
      {/* <Modaltest /> */}
      {/* <SearchAutoComplete /> */}
      {/* <UseFetchHookTest /> */}
      {/* <UseOnclickOutSideTest /> */}
      <UseWindowResizeTest />
    </div>
  );
}

export default App;
