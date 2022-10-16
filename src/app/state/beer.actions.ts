import { createAction, props } from "@ngrx/store";
import { Beer } from "./beer.state";

// export const LoadBeers = createAction('Load Beers');
export const LoadBeersSuccess = createAction('Load Beers Success',props<{ data: Beer[] }>());
export const LoadBeers = createAction('Load Beers',props<{ filterBy: '' }>());