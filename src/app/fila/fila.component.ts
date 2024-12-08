import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActividadesService, Actividad } from '../servicios/actividades.service';


@Component({
  standalone: true,
  selector: 'app-fila',
  templateUrl: './fila.component.html',
  styleUrls: ['./fila.component.scss'],
  imports: [CommonModule],
})
export class FilaComponent {
  @Input() actividad!: Actividad;
}
