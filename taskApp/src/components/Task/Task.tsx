import { ITask } from "../../types";
import { container, desc, title } from "./Task.css";

type Props = {
  task: ITask;
  boardId: string;
  index: number;
};

const Task = ({ task, boardId, index }: Props) => {
  return (
    <div className={container}>
      <div className={title}>{task.taskName}</div>
      <div className={desc}>{task.taskDescription}</div>
    </div>
  );
};

export default Task;
