import { Component, OnInit } from '@angular/core';
import { Router, Routes, ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-main-delete',
  templateUrl: './main-delete.component.html',
  styleUrls: ['./main-delete.component.css']
})
export class MainDeleteComponent implements OnInit {
  mainBack(){
    this.router.navigate(['../Main'])
  }
  constructor(private router:Router) { }

  ngOnInit() {
  }

}
