import { useState } from "react";

import "./index.css";
import Tab from "./index";

// 상태를 인덱스로 받아서 탭이 눌리면 부모의 상태가 변하고
// 그로인해 각 상태마다 적합한 데이터가 보여집니다
// 그리고 인덱스를 자식 탭으로 내려줘서 내려준 인덱스와 맞는 탭을 액티브 상태로 합니다
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
