import { useRef } from "react";
import "./index.css";
import useOutsideClick from "../clickoutside";

const Modal = ({ onClose }) => {
  const myref = useRef(null);
  useOutsideClick(myref, onClose);
  return (
    <div ref={myref} className="modal">
      <span onClick={onClose} className="close-modal-icon">
        &times;
      </span>
      <div>여기는 모달입니다</div>
    </div>
  );
};

export default Modal;
