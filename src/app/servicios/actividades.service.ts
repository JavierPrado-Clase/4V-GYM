import { Injectable } from '@angular/core';

export interface Actividad {
  fecha: string;
  lugar: string;
  monitor: string;
  tipo: string;
}

@Injectable({
  providedIn: 'root',
})
export class ActividadesService {
  private actividades: Actividad[] = [
    { fecha: '10/08/2014 00:00', lugar: 'Aula02', monitor: 'Miguel Goyena', tipo: 'BodyPump' },
    { fecha: '12/09/2022 00:00', lugar: 'Aula01', monitor: 'Miguel Goyena', tipo: 'Pilates' },
    { fecha: '14/09/2022 00:00', lugar: 'Aula03', monitor: 'Miguel Goyena', tipo: 'Zumba' },
  ];

  getActividades(): Actividad[] {
    return this.actividades;
  }
}
