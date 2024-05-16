import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IBoard, IList, ITask } from "../../types";

type TBoardState = {
  modalActive: boolean;
  boardArray: IBoard[];
};
const initialState: TBoardState = {
  modalActive: false,
  boardArray: [
    {
      boardId: "board-0",
      boardName: "첫번째 게시물",
      lists: [
        {
          listId: "list-0",
          listName: "list-1",
          tasks: [
            {
              taskId: "task-0",
              taskName: "task-1",
              taskDescription: "desc",
              taskOwner: "minseok",
            },
            {
              taskId: "task-1",
              taskName: "task-2",
              taskDescription: "desc",
              taskOwner: "minseok",
            },
          ],
        },
        {
          listId: "list-1",
          listName: "list-2",
          tasks: [
            {
              taskId: "task-3",
              taskName: "task-3",
              taskDescription: "desc",
              taskOwner: "minseok",
            },
            {
              taskId: "task-4",
              taskName: "task-4",
              taskDescription: "desc",
              taskOwner: "minseok",
            },
          ],
        },
      ],
    },
  ],
};

type TAddBoardAction = {
  board: IBoard;
};

type TRemoveListAction = {
  boardId: string;
  listId: string;
};

type TAddListAction = {
  boardId: string;
  list: IList;
};
type TAddTaskAction = {
  boardId: string;
  listId: string;
  task: ITask;
};
const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    addBoard: (state, action: PayloadAction<TAddBoardAction>) => {
      state.boardArray.push(action.payload.board);
    },
    addList: (state, action: PayloadAction<TAddListAction>) => {
      state.boardArray.map((board) =>
        board.boardId === action.payload.boardId
          ? { ...board, lists: board.lists.push(action.payload.list) }
          : board
      );
    },
    addTask: (state, action: PayloadAction<TAddTaskAction>) => {
      state.boardArray.map((board) => {
        board.boardId === action.payload.boardId
          ? {
              ...board,
              lists: board.lists.map((list) =>
                list.listId === action.payload.listId
                  ? {
                      ...list,
                      tasks: list.tasks.push(action.payload.task),
                    }
                  : list
              ),
            }
          : board;
      });
    },
    removeList: (state, action: PayloadAction<TRemoveListAction>) => {
      state.boardArray = state.boardArray.map((board) =>
        board.boardId === action.payload.boardId
          ? {
              ...board,
              lists: board.lists.filter(
                (list) => list.listId !== action.payload.listId
              ),
            }
          : board
      );
    },
    setModalActive: (state, action: PayloadAction<boolean>) => {
      state.modalActive = action.payload;
    },
  },
});

export const { addBoard, removeList, setModalActive, addList, addTask } =
  boardSlice.actions;
export const boardReducer = boardSlice.reducer;
