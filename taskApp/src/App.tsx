import { useState } from "react";
import {
  appContainer,
  board,
  buttons,
  deleteButton,
  logButton,
} from "./App.css";
import BoardList from "./components/BoardList/BoardList";
import ListContainer from "./components/ListsContainer/ListContainer";
import { useTypedDispatch, useTypedSelector } from "./hooks/redux";
import ModalEdit from "./components/ModalEdit/ModalEdit";
import LoggerModal from "./components/LoggerModal/LoggerModal";
import { removeBoard, sort } from "./store/slices/boardSlice";
import { addLog } from "./store/slices/loggerSlice";
import { v4 as uuidv4 } from "uuid";
import { DragDropContext } from "react-beautiful-dnd";
const App = () => {
  const [isLoggerOpen, setIsLoggerOpen] = useState(false);
  const [activeBoardId, setActiveBoardId] = useState("board-0");
  const boards = useTypedSelector((state) => state.board.boardArray);
  const modalActive = useTypedSelector((state) => state.board.modalActive);

  const dispatch = useTypedDispatch();
  const getActiveBoard = boards.filter(
    (board) => board.boardId === activeBoardId
  )[0];

  const lists = getActiveBoard.lists;

  const handleDeleteBoard = () => {
    if (boards.length > 1) {
      dispatch(removeBoard({ boardId: getActiveBoard.boardId }));
      dispatch(
        addLog({
          logId: uuidv4(),
          logMessage: "게시판 지우기",
          logAuthor: "User",
          logTimestamp: String(Date.now()),
        })
      );

      const newIndexToSet = () => {
        const indexToBeDeleted = boards.findIndex(
          (board) => board.boardId === activeBoardId
        );
        return indexToBeDeleted === 0
          ? indexToBeDeleted + 1
          : indexToBeDeleted - 1;
      };
      setActiveBoardId(boards[newIndexToSet()].boardId);
    } else {
      alert("최소 게시판 개수는 한개입니다");
    }
  };
  const handleDrapEnd = (result) => {
    const { destination, source, draggableId } = result;

    const sourceList = lists.filter(
      (list) => list.listId === source.droppableId
    )[0];

    dispatch(
      sort({
        boardIndex: boards.findIndex(
          (board) => board.boardId === activeBoardId
        ),
        droppableIdStart: source.droppableId,
        droppableIdEnd: destination.droppableId,
        droppableIndexStart: source.index,
        droppableIndexEnd: destination.index,
        draggableId,
      })
    );
    dispatch(
      addLog({
        logId: uuidv4(),
        logMessage: "리스트 이동",
        logAuthor: "User",
        logTimestamp: String(Date.now()),
      })
    );
  };
  return (
    <div className={appContainer}>
      {isLoggerOpen && <LoggerModal setIsLoggerOpen={setIsLoggerOpen} />}
      {modalActive && <ModalEdit />}
      <BoardList
        activeBoardId={activeBoardId}
        setActiveBoardId={setActiveBoardId}
      />
      <div className={board}>
        <DragDropContext onDragEnd={handleDrapEnd}>
          <ListContainer lists={lists} boardId={getActiveBoard.boardId} />
        </DragDropContext>
      </div>
      <div className={buttons}>
        <button className={deleteButton} onClick={handleDeleteBoard}>
          게시판 삭제하기
        </button>
        <button
          className={logButton}
          onClick={() => setIsLoggerOpen(!isLoggerOpen)}
        >
          {isLoggerOpen ? "활동 목록 숨기기" : "활동 목록 보기"}
        </button>
      </div>
    </div>
  );
};

export default App;
