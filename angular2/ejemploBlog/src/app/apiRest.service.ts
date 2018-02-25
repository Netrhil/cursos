import { Http } from "@angular/http";
import { Injectable } from '@angular/core'

import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';


@Injectable()
export class ApiRestService{
    constructor(private http: Http) {}

    getPosts() {
        const url = "http://localhost:3000/api/post";
        return this.http.get(url)
                            .map(response => response.json())
                            .catch(error => 'server error')
        }
    
    getComentarios(id: number | string){
        const url = "http://localhost:3000/api/post/comentarios" + id;
        return this.http.get(url)

    }

}