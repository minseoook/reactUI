import { createSlice } from "@reduxjs/toolkit";
import { IBoard } from "../../types";

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

const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {},
});

export const boardReducer = boardSlice.reducer;
