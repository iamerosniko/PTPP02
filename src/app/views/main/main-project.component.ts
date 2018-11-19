import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Projects } from '../../entities/entities';

@Component({
  selector: 'app-main',
  templateUrl: './main-project.component.html',
  styleUrls: ['./main-project.component.css']
})
export class MainProjectComponent  {
  mainDetails(){
    this.router.navigate(['../Projects/MainNew'])
  }
  mainDelete(){
    this.router.navigate(['../Projects/MainDelete'])
  }
  constructor(private router:Router) { }

  ngOnInit() {
    console.log(<Projects> JSON.parse(sessionStorage.getItem("projects")));
    
  
  }
 
}
