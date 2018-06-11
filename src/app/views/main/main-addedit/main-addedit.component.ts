import { Component, OnInit } from '@angular/core';
import { Router, Routes, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-addedit',
  templateUrl: './main-addedit.component.html',
  styleUrls: ['./main-addedit.component.css']
})
export class MainAddeditComponent implements OnInit {
  mainBack(){
    this.router.navigate(['../Main'])
  }
  constructor(private router:Router) { }

  ngOnInit() {
  }

}
