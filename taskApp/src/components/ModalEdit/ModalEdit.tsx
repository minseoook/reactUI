import { FiX } from "react-icons/fi";
import { useTypedDispatch, useTypedSelector } from "../../hooks/redux";
import { ChangeEvent, useState } from "react";
import {
  removeTask,
  setModalActive,
  updateTask,
} from "../../store/slices/boardSlice";
import { addLog } from "../../store/slices/loggerSlice";
import { v4 as uuidv4 } from "uuid";
import {
  buttons,
  closeButton,
  header,
  input,
  modalWindow,
  title,
  updateButton,
  wrapper,
} from "./ModalEdit.css";
import { deleteButton } from "../List/List.css";
const ModalEdit = () => {
  const editingState = useTypedSelector((state) => state.modal);
  const dispatch = useTypedDispatch();
  const [data, setdata] = useState(editingState);

  const handleCloseButton = () => {
    dispatch(setModalActive(false));
  };

  const handleUpdate = () => {
    dispatch(
      updateTask({
        boardId: editingState.boardId,
        listId: editingState.listId,
        task: data.task,
      })
    );
    dispatch(
      addLog({
        logId: uuidv4(),
        logMessage: `일 수정하기 ${data.task.taskName}`,
        logAuthor: "User",
        logTimestamp: String(Date.now()),
      })
    );
    dispatch(setModalActive(false));
  };

  const handleDelete = () => {
    dispatch(
      removeTask({
        boardId: editingState.boardId,
        listId: editingState.listId,
        taskId: editingState.task.taskId,
      })
    );
    dispatch(
      addLog({
        logId: uuidv4(),
        logMessage: `일 삭제하기 ${editingState.task.taskName}`,
        logAuthor: "User",
        logTimestamp: String(Date.now()),
      })
    );
    dispatch(setModalActive(false));
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setdata({
      ...data,
      task: { ...data.task, [e.target.name]: e.target.value },
    });
  };
  // const handledescChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   setdata({
  //     ...data,
  //     task: { ...data.task, taskDescription: e.target.value },
  //   });
  // };
  // const handleAuthorChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   setdata({ ...data, task: { ...data.task, taskOwner: e.target.value } });
  // };
  return (
    <div className={wrapper}>
      <div className={modalWindow}>
        <div className={header}>
          <div className={title}>{editingState.task.taskName}</div>
          <FiX className={closeButton} onClick={handleCloseButton} />
        </div>
        <div className={title}>제목</div>
        <input
          className={input}
          type="text"
          name="taskName"
          value={data.task.taskName}
          onChange={handleChange}
        />
        <div className={title}>설명</div>
        <input
          className={input}
          type="text"
          name="taskDescription"
          value={data.task.taskDescription}
          onChange={handleChange}
        />
        <div className={title}>생성한 사람</div>
        <input
          className={input}
          type="text"
          name="taskOwner"
          value={data.task.taskOwner}
          onChange={handleChange}
        />
        <div className={buttons}>
          <button className={updateButton} onClick={handleUpdate}>
            일 수정하기
          </button>
          <button className={deleteButton} onClick={handleDelete}>
            일 삭제하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalEdit;
