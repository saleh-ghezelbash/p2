import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Beer } from './state/beer.state';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {

  constructor(private http: HttpClient) { }

  fetchList(beerName: string = '_', perPage: number = 10, page: number = 1):Observable<Beer[]> {
    let beers:any = this.http.get('https://api.punkapi.com/v2/beers', {
      params: {
        beer_name: beerName,
        per_page: perPage,
        page: page
      }
    })
    // beers.subscribe(x => console.log("beers:",x))    
    return beers;
  }
}
