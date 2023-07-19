import { Component, OnInit } from '@angular/core';
import { EmployesService } from '../employes.service';
import { employed } from '../employed.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employed-list',
  templateUrl: './employed-list.component.html',
  styleUrls: ['./employed-list.component.css']
})
export class EmployedListComponent implements OnInit {

  constructor (private router:Router, private employedService:EmployesService) {}

  ngOnInit(): void {
  this.employes=this.employedService.employes;
  }

  addEmployed(){
    let newEmployed:employed= new employed(this.nameBox, this.lastNameBox);
    this.employedService.AddEmployed(newEmployed);
    this.nameBox='';
    this.lastNameBox='';
  }

  backHome(){
    this.router.navigate([""])
  }

  employes:employed[]=[];

  title='Lista de Empleados';
  nameBox:string='';
  lastNameBox:string='';

}
