import { ChangeEvent, useState } from "react";
import { FiCheck } from "react-icons/fi";
import { icon, input, sideForm } from "./SideForm.css";
import { useTypedDispatch } from "../../../hooks/redux";
import { addBoard } from "../../../store/slices/boardSlice";
import { v4 as uuidv4 } from "uuid";
import { addLog } from "../../../store/slices/loggerSlice";

type Props = {
  setIsFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
  inputRef: React.RefObject<HTMLInputElement>;
};

const SideForm = ({ setIsFormOpen, inputRef }: Props) => {
  const [text, setText] = useState("");
  const dispatch = useTypedDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleOnBlur = () => {
    setIsFormOpen(false);
  };

  const handleClick = () => {
    if (text) {
      dispatch(
        addBoard({ board: { boardId: uuidv4(), boardName: text, lists: [] } })
      );
      dispatch(
        addLog({
          logId: uuidv4(),
          logMessage: text,
          logAuthor: "User",
          logTimestamp: String(Date.now()),
        })
      );
    }
  };
  return (
    <div className={sideForm}>
      <input
        className={input}
        ref={inputRef}
        type="text"
        placeholder="새로운 게시판 등록하기"
        value={text}
        onChange={handleChange}
        onBlur={handleOnBlur}
      />
      <FiCheck className={icon} onMouseDown={handleClick} />
    </div>
  );
};

export default SideForm;
