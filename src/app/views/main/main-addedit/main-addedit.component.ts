import { Component, OnInit } from '@angular/core';
import { Router, Routes, ActivatedRoute } from '@angular/router';
import { ProjectDependenciesService,ContactService } from '../../../services/services';
import { Category,CentricScore,MapCode,Department,Contact,WorkdayContact,WorkdayFormat,ProjectDependencies,SelectItem, EmployeeLookup, EmployeeData  } from '../../../entities/entities';
@Component({
  selector: 'app-main-addedit',
  templateUrl: './main-addedit.component.html',
  styleUrls: ['./main-addedit.component.css']
})
export class MainAddeditComponent implements OnInit {
  public WDEmployees: EmployeeData = { data : [] }
  public selectedItems:SelectItem[] = [];
  public active_tags:SelectItem[] = [{id:'a',text:'banana'}];
  categories:Category[];
  centricScores:CentricScore[];
  mapCodes:MapCode[];
  departments:Department[];
  contacts:Contact[];
  public items:Array<any> = [];

  mainBack(){
    this.router.navigate(['../Projects'])
  }
  save(){
    var ans = confirm("No Tasks added. Do you want to add project task first?");
    ans ? this.router.navigate(['../Projects/MainTasks']) : (alert('Project Successfully saved'), this.router.navigate(['../Projects']));
  }

  goToTask(){
    this.router.navigate(['../Projects/MainTasks']);
  }



  constructor(private router:Router,private consvc:ContactService, private pdSvc:ProjectDependenciesService) { 
  }
  
  projectDependencies:ProjectDependencies;
  async ngOnInit() {
    this.projectDependencies=await this.pdSvc.getDependencies();
    this.categories=await this.projectDependencies.Categories;
    this.centricScores=await this.projectDependencies.CentricScores;
    this.mapCodes=await this.projectDependencies.MapCodes;
    this.departments=await this.projectDependencies.Departments;
    this.contacts=await this.projectDependencies.Contacts;
  }

  async onSearchChange(searchValue : string ) {  
    // console.log(JSON.stringify(this.active_tags))
    this.WDEmployees.data=[];
    this.WDEmployees=<EmployeeData>await this.consvc.getWorkday(searchValue,100);
    // console.log(await this.consvc.getWorkday(searchValue));
    this.items=await [];

    this.WDEmployees.data.forEach(async contact => {
      this.items.push({ 'id': contact.emplid, 'text':contact.full_name})
    });
  }

  //ng2-select on select
  // public refreshValue(value:any):void {
  //   this.selectedItems = value;
  // }
  public selected(value:any):void {
    console.log('Selected value is: ', value);
  }
 
  public removed(value:any):void {
    console.log('Removed value is: ', value);
  }
 
  public refreshValue(value:any):void {
    this.selectedItems = value;
  }
 
  public itemsToString(value:Array<any> = []):string {
    return value
      .map((item:any) => {
        return item.text;
      }).join(',');
  } 
}
