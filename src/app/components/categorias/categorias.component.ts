import { Component } from '@angular/core';
import { Categoria } from 'src/app/interfaces/categoria';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.css'
})
export class CategoriasComponent {
  tiles: Categoria[] = [
    {text: 'ZAPATILLAS', cols: 1, rows: 2, image: './assets/img/zapatilla.jpeg', color: '#BF2A2F'},
    {text: 'FÚTBOL', cols: 2, rows: 1, image: './assets/img/futbol.jpeg', color: '#BF2A2F'},
    {text: 'PELOTAS', cols: 1, rows: 2, image: './assets/img/pelotas.jpg', color: '#BF2A2F'},
    {text: 'CALZAS', cols: 2, rows: 1, image: './assets/img/calzas.jpg', color: '#BF2A2F'},
  ];

  handleTileClick(tile: any) {
    console.log('Tile clicked:', tile);
  }
}