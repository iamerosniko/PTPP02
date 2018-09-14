import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-main',
  templateUrl: './main-project.component.html',
  styleUrls: ['./main-project.component.css']
})
export class MainProjectComponent  {
  mainDetails(){
    this.router.navigate(['../Main/MainNew'])
  }
  mainDelete(){
    this.router.navigate(['../Main/MainDelete'])
  }
  constructor(private router:Router) { }

  ngOnInit() {

  
  }
 
}