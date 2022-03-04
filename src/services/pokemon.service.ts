import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from '../model/pokemon_d';
import { from } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {

  public pokemons: Pokemon[] = [];

  constructor(
    private httpClient: HttpClient,
  ) {
    // "limit" para mostrar apenas 151 pokemons (funcionalidade da própria API)
    const allPokemonsUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=151';
    // Esse httpCliente faz uma requisição get para a url, é passada uma url para ele e eventualmente um dado será retornado
    // O retorno é um objeto e dentro dele temos os resultados em um array
    this.httpClient.get<any>(allPokemonsUrl).pipe(
      map(value => value.results),
      map((value: any) => {
        return from(value).pipe(
          mergeMap((v: any) => this.httpClient.get(v.url)),
        );
      }),
      mergeMap(value => value),
    ).subscribe((result: any) => this.pokemons[result.id] = {
      image: result.sprites.front_default,
      number: result.id,
      name: result.name,
      // O map transformou o array de objetos em um array que pegue o type.name
      types: result.types.map(t => t.type.name),
    });
  }
}
