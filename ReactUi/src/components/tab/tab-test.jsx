import { useState } from "react";

import "./index.css";
import Tab from "./index";

export default function TabTest() {
  const [index, setIndex] = useState(null);
  const tabs = [
    {
      label: "Tab 1",
      content: <div>탭 1</div>,
    },
    {
      label: "Tab 2",
      content: <div>탭 2</div>,
    },
    {
      label: "Tab 3",
      content: <div>탭 3</div>,
    },
  ];

  function handleChange(currentTabIndex) {
    setIndex(currentTabIndex);
  }

  return (
    <>
      <Tab tabs={tabs} currentIndex={index} onChange={handleChange} />
      {tabs[index] && tabs[index].content}
    </>
  );
}
