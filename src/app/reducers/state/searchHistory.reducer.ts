import { createReducer, on } from "@ngrx/store";
import * as states from '../actions/searchHistory.actions'

export const historyInitial: string[] = ['Spiderman', 'Game of thrones']

const _searchHistory = createReducer(
    historyInitial,
    on(states.add, (state, { title }) => state = [ ...state, title ]),
);

export function searchHistory(state, action){
    return _searchHistory(state, action)
}