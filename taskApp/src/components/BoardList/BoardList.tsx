import { useRef, useState } from "react";
import { useTypedDispatch, useTypedSelector } from "../../hooks/redux";
import SideForm from "./SideForm/SideForm";
import { FiLogIn, FiPlusCircle } from "react-icons/fi";
import {
  addButton,
  addSection,
  boardItem,
  boardItemActive,
  container,
  title,
} from "./BoardList.css";
import clsx from "clsx";
import { GoSignOut } from "react-icons/go";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import { app } from "../../firebase";
import { login, logout } from "../../store/slices/userSlice";
import { useAuth } from "../../hooks/useAuth";

type Props = {
  activeBoardId: string;
  setActiveBoardId: React.Dispatch<React.SetStateAction<string>>;
};

const BoardList = ({ activeBoardId, setActiveBoardId }: Props) => {
  const { boardArray } = useTypedSelector((state) => state.board);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useTypedDispatch();
  const { id, email, isAuth } = useAuth();

  const handleClick = () => {
    setIsFormOpen(!isFormOpen);
    setTimeout(() => inputRef.current?.focus(), 0);
  };

  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        dispatch(login({ email: result.user.email!, id: result.user.uid }));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        dispatch(logout());
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className={container}>
      <div className={title}>게시판 :</div>
      {boardArray.map((board, index) => (
        <div
          key={board.boardId}
          className={clsx(
            {
              [boardItemActive]:
                boardArray.findIndex(
                  (board) => board.boardId === activeBoardId
                ) === index,
            },
            {
              [boardItem]:
                boardArray.findIndex(
                  (board) => board.boardId === activeBoardId
                ) !== index,
            }
          )}
          onClick={() => setActiveBoardId(board.boardId)}
        >
          <div>{board.boardName}</div>
        </div>
      ))}
      <div className={addSection}>
        {isFormOpen ? (
          <SideForm setIsFormOpen={setIsFormOpen} inputRef={inputRef} />
        ) : (
          <FiPlusCircle className={addButton} onClick={handleClick} />
        )}
        {isAuth ? (
          <GoSignOut className={addButton} onClick={handleLogout} />
        ) : (
          <FiLogIn className={addButton} onClick={handleLogin} />
        )}
      </div>
    </div>
  );
};

export default BoardList;
