import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category, CentricScore, Contact, Department, EmployeeData, MapCode, ProjectDependencies, SelectItem, Projects } from '../../../entities/entities';
import { ContactService, ProjectDependenciesService } from '../../../services/services';
import { UUID } from 'angular2-uuid'
@Component({
  selector: 'app-main-addedit',
  templateUrl: './main-addedit.component.html',
  styleUrls: ['./main-addedit.component.css']
})
export class MainAddeditComponent implements OnInit {
  public WDEmployees: EmployeeData = { data : [] }
  public selectedItems:SelectItem[] = [];
  public active_tags:SelectItem[] = [];
  categories:Category[];
  centricScores:CentricScore[];
  mapCodes:MapCode[];
  departments:Department[];
  contacts:Contact[];
  public items:Array<any> = [];
  project:Projects={
    Status:"In Progress", 
    ProjectID: UUID.UUID()
  };  

  projectForm : FormGroup;

  mainBack(){
    this.router.navigate(['../Projects'])
  }
  save(){
    console.log(this.project);
    var a = JSON.stringify(this.project);

    sessionStorage.setItem("Projects",a)
    var ans = confirm("No Tasks added. Do you want to add project task first?");
    ans ? this.router.navigate(['../Projects/MainTasks']) : (alert('Project Successfully saved'), this.router.navigate(['../Projects']));
  }

  goToTask(){
    this.router.navigate(['../Projects/MainTasks']);
  }



  constructor(private router:Router,private consvc:ContactService, private pdSvc:ProjectDependenciesService,
    private fb:FormBuilder) { 
    this.projectForm = this.fb.group({
      StakeHolder:[]
    });
    this.projectForm.valueChanges.subscribe(()=>{
      var Value = this.projectForm.controls['StakeHolder'].value
      console.log(Value);

    });
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

  async onSearchChange(event:any,searchValue : string ) {  
    try{
      this.items = <SelectItem[]>await this.consvc.getWorkday2(searchValue,20)
    }
    catch{
      
    }
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
