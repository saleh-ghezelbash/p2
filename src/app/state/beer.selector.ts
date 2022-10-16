import { createFeatureSelector, createSelector } from "@ngrx/store";
import { BeerState, BEERS_FEATURE_KEY } from "./beer.state";

const getBeersState = createFeatureSelector<BeerState>(BEERS_FEATURE_KEY);

export const getAllBeers = createSelector(
  getBeersState,
  (state: BeerState) => {
    return state.beers
  }
);

export const getAllBeersByFilter = createSelector(
  getBeersState,
  (state: BeerState) => {
    return { beers: state.beers, filterBy: state.filterBy }
  }
);