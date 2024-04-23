import "./App.css";
import FilterCard from "./components/filterCard";
import FormValidation from "./components/formValid";
import PaginationTest from "./components/pagination/test";
import TooltipTest from "./components/tooltip/test";

function App() {
  return (
    <>
      <PaginationTest />
      <TooltipTest />
      <FilterCard />
      <FormValidation />
    </>
  );
}

export default App;
