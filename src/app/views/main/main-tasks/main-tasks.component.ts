import { Component, OnInit } from '@angular/core';
import { Router, Routes, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-tasks',
  templateUrl: './main-tasks.component.html',
  styleUrls: ['./main-tasks.component.css']
})
export class MainTasksComponent implements OnInit {
mainBack(){
    this.router.navigate(['../Projects/MainNew'])
}
  constructor(private router:Router) { }

  ngOnInit() {
  }

}
