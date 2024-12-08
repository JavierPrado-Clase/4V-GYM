import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { ActividadesService, Actividad } from '../servicios/actividades.service';

@Component({
  standalone: true,
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss'],
  imports: [CommonModule, MatTableModule],
})
export class TablaComponent implements OnInit {
  actividades: Actividad[] = [];
  displayedColumns: string[] = ['fecha', 'lugar', 'monitor', 'tipo'];

  constructor(private actividadesService: ActividadesService) {}

  ngOnInit(): void {
    this.actividades = this.actividadesService.getActividades();
  }
}
