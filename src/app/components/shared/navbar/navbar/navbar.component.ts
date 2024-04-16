import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isNavOpen: boolean = false;

  toggleNav() {
      this.isNavOpen = !this.isNavOpen;
  }

}
