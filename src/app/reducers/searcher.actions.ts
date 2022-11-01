import { createAction, props } from "@ngrx/store";

export const search = createAction('Search', props<{nameStartsWith: string}>());
export const reset = createAction('Reset');