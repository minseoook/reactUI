import { useState } from "react";
import { appContainer, board, buttons } from "./App.css";
import BoardList from "./components/BoardList/BoardList";
import ListContainer from "./components/ListsContainer/ListContainer";
import { useTypedSelector } from "./hooks/redux";

const App = () => {
  const [activeBoardId, setActiveBoardId] = useState("board-0");
  const boards = useTypedSelector((state) => state.board.boardArray);
  const getActiveBoard = boards.filter(
    (board) => board.boardId === activeBoardId
  )[0];

  const lists = getActiveBoard.lists;
  return (
    <div className={appContainer}>
      <BoardList
        activeBoardId={activeBoardId}
        setActiveBoardId={setActiveBoardId}
      />
      <div className={board}>
        <ListContainer lists={lists} boardId={getActiveBoard.boardId} />
      </div>
      <div className={buttons}>
        <button>삭제하기</button>
        <button>후</button>
      </div>
    </div>
  );
};

export default App;
