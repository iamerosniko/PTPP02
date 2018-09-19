import { Component, OnInit } from '@angular/core';
import { Router, Routes, ActivatedRoute } from '@angular/router';
import { ProjectDependenciesService } from '../../../services/services';
import { Category,CentricScore,MapCode,Department,Contact,ProjectDependencies  } from '../../../entities/entities';
@Component({
  selector: 'app-main-addedit',
  templateUrl: './main-addedit.component.html',
  styleUrls: ['./main-addedit.component.css']
})
export class MainAddeditComponent implements OnInit {
  mainBack(){
    this.router.navigate(['../Projects'])
  }
  save(){
    this.router.navigate(['../Projects/MainTasks'])
  }
  constructor(private router:Router, private pdSvc:ProjectDependenciesService) { }

  categories:Category[];
  centricScores:CentricScore[];
  mapCodes:MapCode[];
  departments:Department[];
  contacts:Contact[];

  projectDependencies:ProjectDependencies;
  async ngOnInit() {
    this.projectDependencies=await this.pdSvc.getDependencies();
    this.categories=await this.projectDependencies.Categories;
    this.centricScores=await this.projectDependencies.CentricScores;
    this.mapCodes=await this.projectDependencies.MapCodes;
    this.departments=await this.projectDependencies.Departments;
    this.contacts=await this.projectDependencies.Contacts;
  }

}
