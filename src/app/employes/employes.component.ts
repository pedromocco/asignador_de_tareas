import { Component, Input } from '@angular/core';
import { employed } from '../employed.model';

@Component({
  selector: 'app-employes',
  templateUrl: './employes.component.html',
  styleUrls: ['./employes.component.css']
})
export class EmployesComponent {

  constructor(){}

  @Input() employedList:employed;
  @Input() index:number;


}
