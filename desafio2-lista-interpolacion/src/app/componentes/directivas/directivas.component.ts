import { Component } from '@angular/core';
import { Estudiante } from '../../models/estudiante';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent {
  subtitulo: String = "Curso de Angular";
  variable1: number = 5;
  estudianteActual:Estudiante = {
    nombre: 'Esteban',
    edad: 22,
    estaActivo: true,
  };

  listaEstudiantes: Estudiante [] = [
    {
      nombre: 'Juan',
      edad: 22,
      estaActivo: true,
    },
    {
      nombre: 'Margarita',
      edad: 22,
      estaActivo: false,
    },
    {
      nombre: 'Rocio',
      edad: 29,
      estaActivo: true,
    },
    {
      nombre: 'Mariano',
      edad: 22,
      estaActivo: true,
    },
    {
      nombre: 'Julia',
      edad: 22,
      estaActivo: false,
    },
    {
      nombre: 'Ana María',
      edad: 22,
      estaActivo: true,
    }
  ] 
}
