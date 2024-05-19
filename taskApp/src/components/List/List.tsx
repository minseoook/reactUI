import { GrSubtract } from "react-icons/gr";
import { IList, ITask } from "../../types";
import Task from "../Task/Task";
import ActionButton from "../ActionButton/ActionButton";
import { useTypedDispatch } from "../../hooks/redux";
import { removeList, setModalActive } from "../../store/slices/boardSlice";
import { addLog } from "../../store/slices/loggerSlice";
import { v4 as uuidv4 } from "uuid";
import { setModalData } from "../../store/slices/modalSlice";
import { deleteButton, header, listWrapper, name } from "./List.css";
import { Droppable } from "react-beautiful-dnd";

type Props = {
  list: IList;
  boardId: string;
};
const List = ({ list, boardId }: Props) => {
  const dispatch = useTypedDispatch();
  const handleListDelete = (listId: string) => {
    dispatch(removeList({ boardId, listId }));
    dispatch(
      addLog({
        logId: uuidv4(),
        logMessage: `리스트 삭제하기 ${list.listName}`,
        logAuthor: "User",
        logTimestamp: String(Date.now()),
      })
    );
  };

  const handleTaskChange = (
    boardId: string,
    listId: string,
    taskId: string,
    task: ITask
  ) => {
    dispatch(setModalData({ boardId, listId, task }));
    dispatch(setModalActive(true));
  };
  return (
    <Droppable droppableId={list.listId}>
      {(provided) => (
        <div
          className={listWrapper}
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          <div className={header}>
            <div className={name}>{list.listName}</div>
            <GrSubtract
              className={deleteButton}
              onClick={() => handleListDelete(list.listId)}
            />
          </div>
          {list.tasks.map((task, index) => (
            <div
              key={task.taskId}
              onClick={() =>
                handleTaskChange(boardId, list.listId, task.taskId, task)
              }
            >
              <Task task={task} boardId={boardId} index={index} />
            </div>
          ))}
          {provided.placeholder}
          <ActionButton boardId={boardId} listId={list.listId} />
        </div>
      )}
    </Droppable>
  );
};

export default List;
