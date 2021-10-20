import { Component, Input, OnInit } from '@angular/core';
import { getPokemonImage, getPokemonNumber, Pokemon } from '../../model/pokemon_d';

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

  public getPokemonImage = getPokemonImage;

  public getPokemonNumber = getPokemonNumber;
}
