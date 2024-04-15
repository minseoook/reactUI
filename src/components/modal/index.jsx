import "./index.css";

const Modal = ({ onClose }) => {
  return (
    <div className="modal">
      <span onClick={onClose} className="close-modal-icon">
        &times;
      </span>
      <div>여기는 모달입니다</div>
    </div>
  );
};

export default Modal;
