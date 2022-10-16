import { createReducer, on, Action, createAction } from '@ngrx/store';
import { BeerState, initialBeerState } from '../state/beer.state';
import * as beerActions from '../state/beer.actions';


const beersReducer = createReducer(
    initialBeerState,
  // on(beerActions.LoadBeers, (state) => ({
  //   ...state,
  //   loaded: false,
  //   error: null,
  // })),
  on(beerActions.LoadBeersSuccess, (state, { data }) => ({
    ...state,
    beers: data,
    loaded: true,
    error: null,
  })),
  on(beerActions.LoadBeers, (state,{filterBy}) => ({
    ...state,
    loaded: false,
    error: null,
    filterBy
  })),
);

export function reducer(state: BeerState | undefined, action: Action) {
  return beersReducer(state, action);
}
