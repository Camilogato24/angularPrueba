import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Departamento } from './Departamento';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
    console.log('Service is working!');
   }
   getData(){
    return this.http.get<Departamento[]>('https://my-json-server.typicode.com/Camilogato24/apicolombia/departamentos')
   }
}
