import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchDetails(){
    this.router.navigate(['../Search/SearchDetails'])
  }
  constructor(private router:Router) { }

  ngOnInit() {
  }

}
