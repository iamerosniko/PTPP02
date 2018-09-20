import { Component, OnInit } from '@angular/core';
import { Router, Routes, ActivatedRoute } from '@angular/router';
import { ProjectDependenciesService } from '../../../services/services';
import { Category,CentricScore,MapCode,Department,Contact,ProjectDependencies,SelectItem  } from '../../../entities/entities';
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
  public selectedItems:SelectItem[] = [];

  categories:Category[];
  centricScores:CentricScore[];
  mapCodes:MapCode[];
  departments:Department[];
  contacts:Contact[];
  items:any[]=[];
  projectDependencies:ProjectDependencies;
  async ngOnInit() {
    this.projectDependencies=await this.pdSvc.getDependencies();
    this.categories=await this.projectDependencies.Categories;
    this.centricScores=await this.projectDependencies.CentricScores;
    this.mapCodes=await this.projectDependencies.MapCodes;
    this.departments=await this.projectDependencies.Departments;
    this.contacts=await this.projectDependencies.Contacts;
    await this.prepareMultipleLists();
  }

  async prepareMultipleLists(){
    this.categories.forEach( contact => {
      this.items.push({ 'id': contact.CategoryID, 'text':contact.Category})
      // this.items.push(new SelectItem(contact.CategoryID,contact.Category))
      // this.items.push(contact.ContactName + ' ' + contact.LastName )
    });

    await console.log(this.items)
  }
  
  //ng2-select on select
  public refreshValue(value:any):void {
    this.selectedItems = value;
  } 
}
