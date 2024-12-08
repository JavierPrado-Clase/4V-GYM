import { Routes } from '@angular/router';
import { TablaComponent } from './tabla/tabla.component';
import { MenuComponent } from './menu/menu.component';

export const routes: Routes = [
  { path: '', redirectTo: '/tabla', pathMatch: 'full' },
  { path: 'tabla', component: TablaComponent },
];
