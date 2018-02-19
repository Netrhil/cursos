import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';

import { ItemComponent } from './item.component';



interface item {
  detalle:string;
  tachado:boolean;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lista: item[] = [];
  nombre: string;
  
  constructor(private http: Http) {};
   
   buscar() {
    const url = 'http://localhost:3000/api/post/comentarios';
    const data = {
      texto: 'asdasd',
      idPost: 3
    };

    this.http.post(url, data).subscribe(
      response => {
        console.log(response.json()); }
    );
  }
  
  agregarToDo(nombreInput) {
    this.lista.push({detalle: nombreInput, tachado: false });
    this.nombre = "";
  }

  eliminarItem(item) {
    this.lista.splice(item, 1);
  }
}

