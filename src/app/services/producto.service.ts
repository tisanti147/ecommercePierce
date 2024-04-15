import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, catchError } from 'rxjs';
import { Producto } from '../interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  productos: Producto[] = [
    {title: 'Samsung Smart Tv',
     price: 1100999,
     image: './assets/img/producto.png'
    }
  ]

  constructor(private http: HttpClient) { }

  getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.productos}`)
  }
}
