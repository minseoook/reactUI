import { useState } from "react";
import "./index.css";
import data from "./data";
const Accordian = () => {
  const [selectedId, setselectedId] = useState(null);
  const [enableMulti, setenableMulti] = useState(false);
  const [multiple, setMultiple] = useState([]);
  console.log(enableMulti, multiple);
  const handleClick = (id) => {
    console.log(id);
    setselectedId(id === selectedId ? null : id);
  };
  const handleClickMulti = (id) => {
    const copy = [...multiple];

    if (copy.indexOf(id) === -1) {
      copy.push(id);
    } else {
      copy.splice(copy.indexOf(id), 1);
    }
    setMultiple(copy);
  };

  return (
    <div className="acc-wrapper">
      <button onClick={() => setenableMulti(!enableMulti)}>
        다중 아코디언 모드 변경
      </button>
      <div className="accordian">
        {data.map((accordian) => (
          <div className="item" key={accordian.id}>
            <div
              className="title"
              onClick={
                enableMulti
                  ? () => handleClickMulti(accordian.id)
                  : () => handleClick(accordian.id)
              }
            >
              <h3>{accordian.question}</h3>
              <span>+</span>
            </div>
            <div className="content">
              {enableMulti ? (
                multiple.indexOf(accordian.id) !== -1 ? (
                  <h3>{accordian.answer}</h3>
                ) : null
              ) : selectedId === accordian.id ? (
                <h3>{accordian.answer}</h3>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordian;
