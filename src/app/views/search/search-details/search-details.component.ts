import { Component, OnInit } from '@angular/core';
import { Router, Routes, ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-search-details',
  templateUrl: './search-details.component.html',
  styleUrls: ['./search-details.component.css']
})
export class SearchDetailsComponent implements OnInit {

  searchDetails(){
    this.router.navigate(['../Search/MainDetails'])
  }
  constructor(private router:Router) { }

  ngOnInit() {
  }

}
