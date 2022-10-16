import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { RouterNavigatedAction, ROUTER_NAVIGATION } from '@ngrx/router-store';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, filter } from 'rxjs/operators';
import { FetchDataService } from '../fetch-data.service';
import * as beerActions from '../state/beer.actions';

@Injectable()
export class BeerEffects {

    constructor(
        private actions$: Actions,
        private beersService: FetchDataService
    ) { }

    loadBeers$ = createEffect(() => this.actions$.pipe(
        ofType(beerActions.LoadBeers),
        mergeMap(() => this.beersService.fetchList()
            .pipe(
                map(beers => (beerActions.LoadBeersSuccess({ data: beers }))),
                // map(beers => ({ type: 'Load Beers Success', payload: beers })),
                catchError(() => EMPTY)
            ))
    ));

    loadBeersByFilter$ = createEffect(() => this.actions$.pipe(
        ofType(ROUTER_NAVIGATION),
        map((r: RouterNavigatedAction) => ({
            url: r.payload.routerState.url,
            filterBy: r.payload.routerState.root.queryParams['name']
        })),
        // filter(({url,filterBy}) => url.startsWith('/')),
        // map(({filterBy}) => beerActions.LoadBeers(filterBy)),
        mergeMap(({ url, filterBy }) => {
            console.log("url:", url);
            console.log("filterBy:", filterBy);

            return this.beersService.fetchList(filterBy)
                .pipe(
                    map(beers => (beerActions.LoadBeersSuccess({ data: beers }))),
                    // map(beers => ({ type: 'Load Beers Success', payload: beers })),
                    catchError(() => EMPTY)
                )
        })
    ));

}