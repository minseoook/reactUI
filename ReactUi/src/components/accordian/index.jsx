//single selection
//multiple selection

import { useState } from "react";
import data from "./data";
import "./index.css";
// 아코디언 아이디어
// 1. 싱글 아코디언
// 데이터를 받아오면 데이터의 고유한 아이디가 있으니까 데이터가 눌리면 id를 인수로 준다
// 그럼 그 아이디를 상태로 만들어서 저장하고 저장된 아이디랑 map으로 돌려진 아코디언이랑 비교하여
// 같은 아코디언은 답을 보여준다

// 2. 멀티 아코디언
// 여러개가 같이 눌릴수 있으므로 상태가 배열이다
// 위와 똑같이 id를 인수로 주면 함수에서 배열에 포함되어있는지를 확인하고 포함이면 push 아니면 pop을 한다
// 단 배열이라 복사를 하고 복사한걸 다시 set해야한다
export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  function handleMultiSelection(getCurrentId) {
    let cpyMutiple = [...multiple];
    const findIndexOfCurrentId = cpyMutiple.indexOf(getCurrentId);

    console.log(findIndexOfCurrentId);
    if (findIndexOfCurrentId === -1) cpyMutiple.push(getCurrentId);
    else cpyMutiple.splice(findIndexOfCurrentId, 1);

    setMultiple(cpyMutiple);
  }

  console.log(selected, multiple);
  return (
    <div className="acc-wrapper">
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        Enable Multi Selection
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem, i) => (
            <div className="item" key={i}>
              <div
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {enableMultiSelection
                ? multiple.indexOf(dataItem.id) !== -1 && (
                    <div className="acc-content ">{dataItem.answer}</div>
                  )
                : selected === dataItem.id && (
                    <div className="acc-content ">{dataItem.answer}</div>
                  )}
              {/* {selected === dataItem.id ||
              multiple.indexOf(dataItem.id) !== -1 ? (
                <div className="content">{dataItem.answer}</div>
              ) : null} */}
            </div>
          ))
        ) : (
          <div>No data found !</div>
        )}
      </div>
    </div>
  );
}
