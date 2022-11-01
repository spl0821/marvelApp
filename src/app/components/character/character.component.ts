import { Component, Input, OnInit } from '@angular/core';
import { Character } from 'src/app/interfaces/marvelCharacters.interface';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  /**
   * Character to be shown
   *
   * @type {Character}
   */
  @Input() character!: Character;

  constructor() { }

  ngOnInit(): void {
  }

}
