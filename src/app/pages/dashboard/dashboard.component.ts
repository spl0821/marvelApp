import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Character } from 'src/app/interfaces/marvelCharacters.interface';
import { MarvelCharactersService } from 'src/app/services/marvel-characters.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  /**
   * Array of characters
   *
   * @type {Character[]}
   */
  characters: Character[] = [];

  /**
   * Holds a reference with the searched name
   *
   * @type {string}
   */
  searchByName: string = '' ;

  /**
   * Prevent to load data when component is created
   *
   * @type {number}
   */
  timesAlive: number = 0;

  /**
   * Creates an instance of DashboardComponent.
   * Listen to actions on reducer
   * @param {MarvelCharactersService} marvelCharService
   * @param {Store<{search: string}>} store
   */
  constructor(private marvelCharService: MarvelCharactersService, private store: Store<{search: string}>) {
    store.subscribe(state => {
      if(this.timesAlive !== 0){
        this.searchByName = state.search;
        this.marvelCharService.resetOffset();
        this.getCharacters(this.searchByName);
      }
      this.timesAlive++;
    })
  }

  ngOnInit(): void {
  }

  /**
   * Request to service to get the characters
   * Search character by name (optional)
   *
   * @param {string} [nameStatrtsWith='']
   */
  getCharacters(nameStatrtsWith: string = ''){
    this.marvelCharService.getCharacters(nameStatrtsWith).then(characters => {
      this.characters = characters;
    })
  }

  /**
   * Event triggered when onScroll
   */
  seeMore(){
    this.marvelCharService.getCharacters(this.searchByName).then(characters => {
      this.characters = [...this.characters,...characters];
    })
  }

}
