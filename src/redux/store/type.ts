import { AsyncThunk, CaseReducer } from "@reduxjs/toolkit";

export enum APIStatus {
  IDLE,
  LOADING,
  SUCCEEDED,
  FAILURE,
}

export interface IReducer<State, Thunk extends AsyncThunk<any, any, any>> {
  pending: CaseReducer<State, ReturnType<Thunk["pending"]>>;
  rejected: CaseReducer<State, ReturnType<Thunk["rejected"]>>;
  fulfilled: CaseReducer<State, ReturnType<Thunk["fulfilled"]>>;
}
