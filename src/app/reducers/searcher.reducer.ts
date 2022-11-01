import { createReducer, on } from "@ngrx/store";
import { reset, search } from "./searcher.actions";

export const initialState = '';

export const searcherReducer = createReducer(
    initialState,
    on(search, (state, {nameStartsWith}) => (nameStartsWith)),
    on(reset, (state) => initialState)
)