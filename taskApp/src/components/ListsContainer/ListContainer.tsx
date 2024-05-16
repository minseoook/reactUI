import { IList } from "../../types";
import ActionButton from "../ActionButton/ActionButton";
import List from "../List/List";
import { listsContainer } from "./ListContainer.css";

type Props = {
  lists: IList[];
  boardId: string;
};

const ListContainer = ({ lists, boardId }: Props) => {
  return (
    <div className={listsContainer}>
      {lists.map((list) => (
        <List key={list.listId} list={list} boardId={boardId} />
      ))}

      <ActionButton boardId={boardId} listId={""} list />
    </div>
  );
};

export default ListContainer;
