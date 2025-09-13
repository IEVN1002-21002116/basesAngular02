import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: false,
  templateUrl: './heroes-list.component.html',
  styleUrl: './heroes-list.component.css'
})
export class HeroesListComponent {
  heroes: any[] = [
    {
      "Imagen": "https://dragonball-api.com/characters/goku_normal.webp",
      Nombre: "Goku",
      Descripcion: "Kakaroto",
      Raza: "Saiyan",
      Ki: "9000"
    },
    {
      "Imagen": "https://dragonball-api.com/characters/vegeta_normal.webp",
      Nombre: "Vegeta",
      Descripcion: "Principe de los Saiyan",
      Raza: "Saiyan",
      Ki: "8500"
    }, {
      "Imagen": "https://dragonball-api.com/characters/picolo_normal.webp",
      Nombre: "Piccolo",
      Descripcion: "Guerrero Namekian",
      Raza: "Namekiano",
      Ki: "7000"
    }, {
      "Imagen": "https://dragonball-api.com/characters/Freezer.webp",
      Nombre: "Freezer",
      Descripcion: "Tirano del Universo",
      Raza: "Frieza",
      Ki: "53000"
    }
  ]
}

