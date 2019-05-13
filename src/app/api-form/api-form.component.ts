import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-api-form',
  templateUrl: './api-form.component.html',
  styleUrls: ['./api-form.component.css']
})
export class ApiFormComponent implements OnInit {
  departamentos: any[] = [];
  ciudadess: Array<any>;
  constructor(private  dataService: DataService){
    this.dataService.getData().subscribe(data =>{
      //console.log(data);
      this.departamentos = data;
    });
  }
  changeDepartamento(count) {
    this.ciudadess = this.departamentos.find(con => con.id == count).ciudades;
  }


  ngOnInit() {
  }

}
