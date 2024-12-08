import { Component, ViewChild } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { TablaComponent } from './tabla/tabla.component';
import { CommonModule } from '@angular/common'; // Importa CommonModule

@Component({
  standalone: true,
  selector: 'app-root',
  template: `
    <div class="container">
      <app-menu></app-menu>
      <div class="content">
        <app-tabla *ngIf="menu?.actividadesVisibles"></app-tabla>
      </div>
    </div>

  `,
  imports: [MenuComponent, TablaComponent, CommonModule], // Agrega CommonModule
})
export class AppComponent {
  @ViewChild(MenuComponent) menu!: MenuComponent;
}
