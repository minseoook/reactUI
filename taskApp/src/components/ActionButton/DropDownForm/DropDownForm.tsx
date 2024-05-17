import { useState } from "react";
import { FiX } from "react-icons/fi";
import { useTypedDispatch } from "../../../hooks/redux";
import { addList, addTask } from "../../../store/slices/boardSlice";
import { v4 as uuidv4 } from "uuid";
import { addLog } from "../../../store/slices/loggerSlice";
import {
  button,
  buttons,
  close,
  input,
  listForm,
  taskForm,
} from "./DropDownForm.css";

type Props = {
  setIsFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
  list?: boolean;
  boardId: string;
  listId: string;
};

const DropDownForm = ({ setIsFormOpen, list, boardId, listId }: Props) => {
  const [text, settext] = useState("");
  const formPlaceholder = list
    ? "리스트 제목 입력하세요"
    : "일의 제목을 입력하세요";

  const buttonTitle = list ? "리스트 추가하기" : "일 추가하기";
  const dispatch = useTypedDispatch();

  const handleButtonClick = () => {
    if (text) {
      if (list) {
        dispatch(
          addList({
            boardId,
            list: { listId: uuidv4(), listName: text, tasks: [] },
          })
        );

        dispatch(
          addLog({
            logId: uuidv4(),
            logMessage: `리스트 생성하기 ${text}`,
            logAuthor: "User",
            logTimestamp: String(Date.now()),
          })
        );
      } else {
        dispatch(
          addTask({
            boardId,
            listId,
            task: {
              taskId: uuidv4(),
              taskName: text,
              taskDescription: "",
              taskOwner: "User",
            },
          })
        );
        dispatch(
          addLog({
            logId: uuidv4(),
            logMessage: `일 생성하기 ${text}`,
            logAuthor: "User",
            logTimestamp: String(Date.now()),
          })
        );
      }
    }
  };
  return (
    <div className={list ? listForm : taskForm}>
      <textarea
        className={input}
        autoFocus
        placeholder={formPlaceholder}
        value={text}
        onChange={(e) => settext(e.target.value)}
        onBlur={() => setIsFormOpen(false)}
      />
      <div className={buttons}>
        <button className={button} onMouseDown={handleButtonClick}>
          {buttonTitle}
        </button>
        <FiX className={close} />
      </div>
    </div>
  );
};

export default DropDownForm;
