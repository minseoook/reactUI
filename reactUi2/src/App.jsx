import "./App.css";
import DebounceApiCall from "./components/debounce";
import FilterCard from "./components/filterCard";
import FormValidation from "./components/formValid";
import PaginationTest from "./components/pagination/test";
import SortData from "./components/sortData";
import TooltipTest from "./components/tooltip/test";

function App() {
  return (
    <>
      <PaginationTest />
      <TooltipTest />
      <FilterCard />
      <FormValidation />
      <DebounceApiCall />
      <SortData />
    </>
  );
}

export default App;
