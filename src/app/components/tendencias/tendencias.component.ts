import { Producto } from './../../interfaces/producto';
import { ProductoService } from './../../services/producto.service';
import { Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-tendencias',
  templateUrl: './tendencias.component.html',
  styleUrl: './tendencias.component.css'
})
export class TendenciasComponent implements OnInit {

    products: Producto[] = [
        {title: 'Samsung Smart Tv',
         price: 1100999,
         image: './assets/img/producto.png'
        },
        {title: 'Samsung Smart Tv',
         price: 1100999,
         image: './assets/img/producto.png'
        },
        {title: 'Samsung Smart Tv',
         price: 1100999,
         image: './assets/img/producto.png'
        },
        {title: 'Samsung Smart Tv',
         price: 1100999,
         image: './assets/img/producto.png'
        },
        {title: 'Samsung Smart Tv',
         price: 1100999,
         image: './assets/img/producto.png'
        }
      ]

  responsiveOptions: any[] | undefined;

  constructor(private productService: ProductoService) {}

  ngOnInit() {
    this.products

    this.responsiveOptions = [
      {
          breakpoint: '1199px',
          numVisible: 1,
          numScroll: 1
      },
      {
          breakpoint: '991px',
          numVisible: 2,
          numScroll: 1
      },
      {
          breakpoint: '767px',
          numVisible: 1,
          numScroll: 1
      }
  ];
  }
}