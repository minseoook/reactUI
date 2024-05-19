import { Draggable } from "react-beautiful-dnd";
import { ITask } from "../../types";
import { container, desc, title } from "./Task.css";

type Props = {
  task: ITask;
  boardId: string;
  index: number;
};

const Task = ({ task, boardId, index }: Props) => {
  return (
    <Draggable draggableId={task.taskId} index={index}>
      {(provided) => (
        <div
          className={container}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className={title}>{task.taskName}</div>
          <div className={desc}>{task.taskDescription}</div>
        </div>
      )}
    </Draggable>
  );
};

export default Task;
