import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Character, MarvelAPIResponse } from '../interfaces/marvelCharacters.interface';

const APIURL = environment.apiUrl;
const APIKEY = environment.apiKey;
const HASH = environment.hash;

@Injectable({
  providedIn: 'root'
})
export class MarvelCharactersService {

  /**
   * Offset present in getCharacters params
   *
   * @type {number}
   */
  offset: number = 0;

  constructor(private http: HttpClient) { }
  
  /**
   * Get characters from marvel API
   *
   * @param {string} [characterName=''] Starts with 
   * @return {*}  {Promise<Character[]>} Array of characters
   */
  getCharacters(characterName: string = ''): Promise<Character[]>{
    return new Promise((resolve, reject) => {
      let url = characterName !== '' ? `${APIURL}&limit=4&offset=${this.offset}&nameStartsWith=${characterName}&apikey=${APIKEY}&hash=${HASH}` : `${APIURL}&limit=4&offset=${this.offset}&apikey=${APIKEY}&hash=${HASH}`;
      this.http.get<MarvelAPIResponse>(url).subscribe(response => {
        if(response.code == 200){
          resolve(response.data.results);
          this.offset += 4;
        }else{
          resolve([])
        }
      }, err => reject(err))
    })
  }

  /**
   * Return offset to 0
   */
  resetOffset(){
    this.offset = 0;
  }
}
