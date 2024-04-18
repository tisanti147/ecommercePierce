import { Producto } from './../../interfaces/producto';
import { Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-tendencias',
  templateUrl: './tendencias.component.html',
  styleUrl: './tendencias.component.css'
})
export class TendenciasComponent implements OnInit {

    products: Producto[] = [
        {title: 'Samsung Smart Tv 75 UHD',
         price: 1100999,
         image: './assets/img/producto.png'
        },
        {title: 'Samsung Smart Tv 75 UHD',
         price: 1100999,
         image: './assets/img/producto.png'
        },
        {title: 'Samsung Smart Tv 75 UHD',
         price: 1100999,
         image: './assets/img/producto.png'
        },
        {title: 'Samsung Smart Tv 75 UHD',
         price: 1100999,
         image: './assets/img/producto.png'
        },
        {title: 'Samsung Smart Tv 75 UHD',
         price: 1100999,
         image: './assets/img/producto.png'
        }
      ]

  responsiveOptions: any[] | undefined;

  constructor() {}

  ngOnInit() {
    this.products

    this.responsiveOptions = [
      {
          breakpoint: '1199px',
          numVisible: 3,
          numScroll: 1
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 1
      },
      {
          breakpoint: '450px',
          numVisible: 1,
          numScroll: 1
      }
  ];
  }
}