import {
  Action,
  combineReducers,
  configureStore,
  Reducer,
} from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { moviesInitialState, moviesSlice } from "./movies";
import { Movies } from "./movies/types";

export type RootState = {
  movies: Movies;
};

export const initialState: RootState = {
  movies: moviesInitialState,
};

const combinedReducer: Reducer<RootState, Action> = combineReducers({
  movies: moviesSlice.reducer,
});

export const rootReducer: Reducer<RootState, Action> = (
  state: RootState | undefined,
  action: Action
) => combinedReducer(state, action);

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
