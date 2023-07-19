import { Component, OnInit } from '@angular/core';
import { employed } from '../employed.model';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployesService } from '../employes.service';

@Component({
  selector: 'app-update-delete',
  templateUrl: './update-delete.component.html',
  styleUrls: ['./update-delete.component.css']
})
export class UpdateDeleteComponent implements OnInit {

  constructor(private router:Router, private employesService:EmployesService, private route:ActivatedRoute ){}

  ngOnInit(): void {
    let employed:employed=this.employesService.findEmployed(this.index);
     this.index=this.route.snapshot.params['id'];
     this.employes=this.employesService.employes;
     this.nameBox=employed.name;
     this.lastNameBox=employed.lastName;
  }


  updateEmployed(){

    let myEmployed:employed=new employed(this.nameBox, this.lastNameBox);
    this.employesService.updateEmployed(this.index, myEmployed);
    this.router.navigate([""])
  
  }

  deleteEmployed(){

    this.employesService.deleteEmployed(this.index);
    this.router.navigate([""])

  }

  employes:employed[]=[];
  nameBox:string='';
  lastNameBox:string='';
  index:number;

}
