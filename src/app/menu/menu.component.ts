import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  imports: [MatToolbarModule, MatButtonModule, RouterModule],
})
export class MenuComponent {
  actividadesVisibles: boolean = false;

  mostrarActividades() {
    this.actividadesVisibles = !this.actividadesVisibles;
  }
}