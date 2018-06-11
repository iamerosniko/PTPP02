import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
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
