import "./App.css";
import Accordian from "./components/accordian";
import UseOnclickOutSideTest from "./components/clickoutside/test";
import UseFetchHookTest from "./components/fetch/test";
import ImageSlider from "./components/imageSlider";
import LightDarkMode from "./components/light-dark-mode";
import LoadMoreButton from "./components/loadMoreButton";
import Modaltest from "./components/modal/modaltest";
import ScrollIndicator from "./components/scroll-indicator";
import ScrollToTopAndBottom from "./components/scrollTopBottom";
import ScrollToSection from "./components/scrollTopBottom/index2";
import SearchAutoComplete from "./components/search-autocomplete";
import TabTest from "./components/tab/tab-test";
import UseWindowResizeTest from "./components/windowResize/test";

function App() {
  return (
    <div>
      <Accordian />
      <ImageSlider url={"https://picsum.photos/v2/list"} />
      <LoadMoreButton />
      <LightDarkMode />
      <ScrollIndicator />
      <TabTest />
      <Modaltest />
      <SearchAutoComplete />
      <UseFetchHookTest />
      <UseOnclickOutSideTest />
      <UseWindowResizeTest />
      <ScrollToSection />
      <ScrollToTopAndBottom />
    </div>
  );
}
//완성

export default App;
