import { Component } from '@angular/core';
import { ApiRestService } from "./apiRest.service";

//Gerenara inteface
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiRestService]
})
export class AppComponent {
  titulo = 'Lista de blogs Angular 2!';
  public items: any;
  constructor(private apiRest: ApiRestService) {
    this.apiRest.getPosts().subscribe(
      response => this.items = response.response     
      ,
      error => console.log(error)
    );
  }

   

  

  cosa(){
    this.apiRest.getPosts().subscribe(
      response => console.log(response)
      ,
      error => console.log(error)
    );
  };
}
