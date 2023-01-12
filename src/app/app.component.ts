import { Component } from '@angular/core';
import { Form } from '@angular/forms';

interface Pokemon {
  id: number,
  name: string,
  type: string,
  isCool: boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  numberOne: number;
  numberTwo: number;
  togglePokemon: false;
  imgSrc: string;
  favoriteAnimal: string;
  pokemonName: string;

  pokemons: Pokemon[] = [{
    id: 1,
    name: "Charmander",
    type: "Fire",
    isCool: false
  }, {
    id: 2,
    name: "Bulbasaur",
    type: "Grass",
    isCool: true
    }, {
    id: 3,
    name: "Squirtle",
    type: "Water",
    isCool: true
  }]

  constructor() {
    this.title = "Basket of baby BEAVS";
    this.numberOne = 666;
    this.numberTwo = 420;
    this.togglePokemon = false;
    this.imgSrc = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiisp2e-J2wZHuh-Vntw0yOxa8t929Pv1hpuiUwm8-vw&s"
    this.favoriteAnimal = "TURTS"
    this.pokemonName = ""
  }

  handleClick(value: any) {
    console.log(value)
  }
}
