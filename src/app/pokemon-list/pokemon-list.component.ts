import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  constructor(
    public PokemonService: PokemonService,
    ) { }

  ngOnInit(): void {
  }

  // public pokemons: Pokemon[] = [
  //   {
  //     image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png',
  //     number: 1,
  //     name: 'Bulbasaur',
  //     types: [
  //       Type.Grass,
  //       Type.Poison
  //     ],
  //   },
  //   {
  //     image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png',
  //     number: 2,
  //     name: 'Ivysaur',
  //     types: [
  //       Type.Grass,
  //       Type.Poison
  //     ],
  //   },
  //   {
  //     image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png',
  //     number: 3,
  //     name: 'Venosaur',
  //     types: [
  //       Type.Grass,
  //       Type.Poison
  //     ],
  //   },
  //   {
  //     image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png',
  //     number: 4,
  //     name: 'Charmander',
  //     types: [
  //       Type.Fire,
  //     ],
  //   },
  // ];
}
