import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-back-home',
  templateUrl: './back-home.component.html',
  styleUrls: ['./back-home.component.css']
})
export class BackHomeComponent {

constructor(private router:Router){}

  backHome(){
    this.router.navigate([""]);
  }
}
