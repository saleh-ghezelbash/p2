import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
// import { FetchDataService } from '../fetch-data.service';
import * as fromSelector from '../state/beer.selector';
import { Beer } from '../state/beer.state';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css']
})
export class BeerListComponent implements OnInit {
  // beers: any = [];
  beerInput: string = '';

  beers: Observable<Beer[]> = this.store.pipe(select(fromSelector.getAllBeers))
    // .subscribe(x => {
    //   console.log("xxx:", x);
    //   return x;
    // });

  constructor(
    // private fetchDataService: FetchDataService,
    private store: Store,
    private router:Router
  ) {


  }

  ngOnInit(): void {
    this.getList();
  }

  getList(beerInput: string = '_') {
    // this.fetchDataService.fetchList(beerInput).subscribe(d => {
    //   console.log(d);
    //   this.beers = d;
    // })

    this.store.dispatch({ type: 'Load Beers' });
  }

  onInput(event: any) {
    this.beerInput = event.target.value.replace(" ", "_");
  }

  onClick() {
    // this.getList(this.beerInput);
    this.router.navigateByUrl(`?name=${this.beerInput}`);
  }

}
