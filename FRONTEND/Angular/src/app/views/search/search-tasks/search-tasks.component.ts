import { Component, OnInit } from '@angular/core';
import { Router, Routes, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-tasks',
  templateUrl: './search-tasks.component.html',
  styleUrls: ['./search-tasks.component.css']
})
export class SearchTasksComponent implements OnInit {

searchDetails(){
    this.router.navigate(['../Search/SearchDetails'])
  }
  constructor(private router:Router) { }

  ngOnInit() {
  }

}
