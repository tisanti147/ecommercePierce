import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    slides: any[] = new Array(3).fill({id: -1, src: '', title: '', subtitle: ''});
  
    constructor() { }
  
    ngOnInit(): void {
      this.slides[0] = {
        src: './assets/img/banner.jpeg',
      };
      this.slides[1] = {
        src: './assets/img/banner.jpeg',
      }
      this.slides[2] = {
        src: './assets/img/banner.jpeg',
      }
      this.slides[3] = {
        src: './assets/img/banner.jpeg',
      }
    }
  }