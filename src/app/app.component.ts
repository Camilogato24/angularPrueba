import { Component } from '@angular/core';
import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';
 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'AngularApp';
  /*departamentos: any[] = [];
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
  */
}
