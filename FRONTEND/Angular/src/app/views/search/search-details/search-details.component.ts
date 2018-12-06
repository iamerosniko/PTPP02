import { Component, OnInit } from '@angular/core';
import { Router, Routes, ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-search-details',
  templateUrl: './search-details.component.html',
  styleUrls: ['./search-details.component.css']
})
export class SearchDetailsComponent implements OnInit {
  searchTasks(){
    this.router.navigate(['../Search/SearchTasks'])
  }
  searchDetails(){
    this.router.navigate(['../Search/SearchDetails'])
  }
  searchBack(){
    this.router.navigate(['../Search'])
  }
  constructor(private router:Router) { }

  ngOnInit() {
  }

}
