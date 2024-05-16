import { useState } from "react";
import DropDownForm from "./DropDownForm/DropDownForm";
import { IoIosAdd } from "react-icons/io";
import { listButton, taskButton } from "./ActionButton.css";

type Props = {
  list?: boolean;
  boardId: string;
  listId: string;
};

const ActionButton = ({ list, boardId, listId }: Props) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const buttonText = list ? "새로운 리스트 등록" : "새로운 일 등록";
  return isFormOpen ? (
    <DropDownForm
      setIsFormOpen={setIsFormOpen}
      list={list ? true : false}
      boardId={boardId}
      listId={listId}
    />
  ) : (
    <div
      className={list ? listButton : taskButton}
      onClick={() => setIsFormOpen(true)}
    >
      <IoIosAdd />
      <p>{buttonText}</p>
    </div>
  );
};

export default ActionButton;
