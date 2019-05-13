import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marco-comun',
  templateUrl: './marco-comun.component.html',
  styleUrls: ['./marco-comun.component.css']
})
export class MarcoComunComponent implements OnInit {
  
  apertura: string = 'Programa de Inglés para Adultos (Programa 4 días, Sábados e Intensivos)';
  materiales: string[] = ['Libro life 1', 'Libro life 2', 'Libro life 3', 'Libro life 4'];
  ciclos: string[] = ['Fundamental 1-4', 'Fundamental Plus 1-4', 'Pre independent 1-4', 'Independent 1-4'];
  horas: number[] = [128, 128, 128, 128];
  niveles: string[] = ['A1', 'A2', 'B1', 'B1+'];

  constructor() { }

  ngOnInit() {
  }

}
