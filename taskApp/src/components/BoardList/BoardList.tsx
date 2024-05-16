import { useRef, useState } from "react";
import { useTypedSelector } from "../../hooks/redux";
import SideForm from "./SideForm/SideForm";
import { FiPlusCircle } from "react-icons/fi";
import {
  addButton,
  addSection,
  boardItem,
  boardItemActive,
  container,
  title,
} from "./BoardList.css";
import clsx from "clsx";

type Props = {
  activeBoardId: string;
  setActiveBoardId: React.Dispatch<React.SetStateAction<string>>;
};

const BoardList = ({ activeBoardId, setActiveBoardId }: Props) => {
  const { boardArray } = useTypedSelector((state) => state.board);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    setIsFormOpen(!isFormOpen);
    setTimeout(() => inputRef.current?.focus(), 0);
  };
  return (
    <div className={container}>
      <div className={title}>게시판 :</div>
      {boardArray.map((board, index) => (
        <div
          key={board.boardId}
          className={clsx(
            {
              [boardItemActive]:
                boardArray.findIndex(
                  (board) => board.boardId === activeBoardId
                ) === index,
            },
            {
              [boardItem]:
                boardArray.findIndex(
                  (board) => board.boardId === activeBoardId
                ) !== index,
            }
          )}
          onClick={() => setActiveBoardId(board.boardId)}
        >
          <div>{board.boardName}</div>
        </div>
      ))}
      <div className={addSection}>
        {isFormOpen ? (
          <SideForm setIsFormOpen={setIsFormOpen} inputRef={inputRef} />
        ) : (
          <FiPlusCircle className={addButton} onClick={handleClick} />
        )}
      </div>
    </div>
  );
};

export default BoardList;
