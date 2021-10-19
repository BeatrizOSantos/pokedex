import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon-list/pokemon_d';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  public pokemon: Pokemon;

  public leadingZero(str: string | number, size: number = 3): string {
    let s = String(str);
    while (s.length < (size || 2)) {
      s = '0' + s
    }
    return s;
  }

}
