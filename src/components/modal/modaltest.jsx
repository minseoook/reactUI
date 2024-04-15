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

export default Modaltest;
