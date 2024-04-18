import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  sidebar: any;
  
  toggleNav() {
    this.sidebar = document.querySelector('.sidebar');
    this.sidebar.style.display = 'flex';
   }

   closeNav(){
    this.sidebar = document.querySelector('.sidebar');
    this.sidebar.style.display = 'none';
   }
}
