import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { appSlice } from "./slices/appSlice";

export const makeStore = () => {
    return  configureStore({
        reducer: {
          [appSlice.name]: appSlice.reducer,
        },
      });
}

export type AppStore = ReturnType<typeof makeStore>

export type RootState = ReturnType<AppStore['getState']>;

export type AppDispatch =AppStore['dispatch'];

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
