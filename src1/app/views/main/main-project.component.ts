import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LazyLoadEvent } from './main-project';
@Component({
  selector: 'app-main',
  templateUrl: './main-project.component.html',
  styleUrls: ['./main-project.component.css']
})
export class MainProjectComponent implements OnInit {
  mainDetails(){
    this.router.navigate(['../Main/MainNew'])
  }
  mainDelete(){
    this.router.navigate(['../Main/MainDelete'])
  }
  constructor(private router:Router) { }

  datasource: Car[];

  cars: Car[];

  totalRecords: number;

  cols: any[];

  loading: boolean;

  ngOnInit() {

    this.cols = [
      { field: 'vin', header: 'Vin' },
      { field: 'year', header: 'Year' },
      { field: 'brand', header: 'Brand' },
      { field: 'color', header: 'Color' }
    ];

    this.loading = true;
  }
  loadCarsLazy(event: LazyLoadEvent) {
    this.loading = true;

    //in a real application, make a remote request to load data using state metadata from event
    //event.first = First row offset
    //event.rows = Number of rows per page
    //event.sortField = Field name to sort with
    //event.sortOrder = Sort order as number, 1 for asc and -1 for dec
    //filters: FilterMetadata object having field as key and filter value, filter matchMode as value

    //imitate db connection over a network
    setTimeout(() => {
        if (this.datasource) {
            this.cars = this.datasource.slice(event.first, (event.first + event.rows));
            this.loading = false;
        }
    }, 1000);
  }
}

export interface Car {
  vin?;
  year?;
  brand?;
  color?;
  price?;
  saleDate?;
}

import { SortMeta } from './main-project';
import { FilterMetadata } from './main-project';

export interface LazyLoadEvent {
    first?: number;
    rows?: number;
    sortField?: string;
    sortOrder?: number;
    multiSortMeta?: SortMeta[];
    filters?: {[s: string]: FilterMetadata;};
    globalFilter?: any;
}

export interface SortMeta {
  field: string;
  order: number;
}

export interface FilterMetadata {
  value?: any;
  matchMode?: string;
}