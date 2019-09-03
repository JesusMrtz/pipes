import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'Jesus';
  nombre2 = 'jesúS Martínez torRes';
  activar = true;
  video = 'QCI56EnUQ-4';
  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  PI = 1000000.2321932;
  a = 0.234;
  salario = 12345.5;

  heroe = {
    nombre: 'Peter',
    clave: 'Spiderman',
    edad: 20,
    direccion: {
      calle: 'Primera',
      casa: '19'
    }
  };

  valorDePromesa = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Llegó la data'), 3500);
  });

  fecha = new Date();
}
