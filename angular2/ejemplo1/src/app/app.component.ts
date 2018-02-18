import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'alguien!';
  visible = true;
  pruebaClasesCss = 'red';

  items = [
    {cosa: 1 , check: true},
    {cosa: 2 , check: true},
    {cosa: 4 , check: true},
    {cosa: 3 , check: true},
  ]
  cambiarNombre(nombreHtml: string) {
    this.nombre = nombreHtml;
  }
}

