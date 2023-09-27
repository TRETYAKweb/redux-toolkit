import { configureStore } from "@reduxjs/toolkit";
import {rootReducer} from './reducers'
import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { useSelector } from "react-redux";


export const store = configureStore({
    reducer: rootReducer
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch<AppDispatch>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export type Action = { type: string; payload: unknown; error?: boolean };
