import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EmployedListComponent } from './employed-list/employed-list.component';
import { TaskListComponent } from './task-list/task-list.component';
import { ContacComponent } from './contac/contac.component';
import { EmployesComponent } from './employes/employes.component';
import { FooterComponent } from './footer/footer.component';
import { UpdateDeleteComponent } from './update-delete/update-delete.component';
import { EmployesService } from './employes.service';
import { BackHomeComponent } from './back-home/back-home.component';

const appRoutes:Routes=[
  {path:'', component:HomeComponent},
  {path:'employed-list', component:EmployedListComponent},
  {path:'task-list', component:TaskListComponent},
  {path:'contac', component:ContacComponent},
  {path:'update/:id', component:UpdateDeleteComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployedListComponent,
    TaskListComponent,
    ContacComponent,
    EmployesComponent,
    FooterComponent,
    UpdateDeleteComponent,
    BackHomeComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [EmployesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
