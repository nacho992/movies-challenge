import { createAction, props } from "@ngrx/store";

export const add = createAction('Add',
    props<{ title: string }>()
)