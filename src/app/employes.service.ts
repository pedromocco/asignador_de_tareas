import { Injectable } from '@angular/core';
import { employed } from './employed.model';

@Injectable({
  providedIn: 'root'
})
export class EmployesService {

  constructor(){}

  AddEmployed(employed:employed){
    this.employes.push(employed);
  }

  updateEmployed(index:number, employed:employed){
    let employedUpdated=this.employes[index];
    employedUpdated.name=employed.name;
    employedUpdated.lastName=employed.lastName;
  }

  deleteEmployed(index:number){
    this.employes.splice(index,1);
  }

  findEmployed(index:number){
    let employed:employed=this.employes[index];
    return employed
  }

  employes:employed[]=[
    new employed ("Pedro", "Mocco"),
    new employed ("Krizia", "Vera"),
    new employed ("Juan", "Arocha")
  ];


}
