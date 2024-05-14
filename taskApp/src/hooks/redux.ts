import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

const useTypedDispatch = () => useDispatch<AppDispatch>();

export { useTypedDispatch, useTypedSelector };
