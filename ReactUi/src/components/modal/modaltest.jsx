import { useState } from "react";
import Modal from "./index";

const Modaltest = () => {
  const [showmodal, setShowmodal] = useState(false);

  const openModal = () => {
    setShowmodal(!showmodal);
  };
  return (
    <>
      <button onClick={openModal}>모달 오픈</button>
      {showmodal && <Modal onClose={openModal} />}
    </>
  );
};
//모달은 가운데 맞춰주는 css가 중요하다
//모달로 바깥클릭하면 꺼주는 훅을 사용한다 단 여기는 첫 렌더때 레프가 전달되기때문에 레프에 포함인지 아닌지만 생각하면 된다
export default Modaltest;
