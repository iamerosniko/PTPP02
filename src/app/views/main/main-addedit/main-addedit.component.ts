import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category, CentricScore, Contact, Department, EmployeeData, MapCode, ProjectDependencies, SelectItem, Projects } from '../../../entities/entities';
import { ContactService, ProjectDependenciesService, ProjectService } from '../../../services/services';
import { UUID } from 'angular2-uuid'
@Component({
  selector: 'app-main-addedit',
  templateUrl: './main-addedit.component.html',
  styleUrls: ['./main-addedit.component.css']
})
export class MainAddeditComponent implements OnInit {
  public WDEmployees: EmployeeData = { data : [] }
  public selectedItems:SelectItem[] = [];

  public aProjectSponsor:SelectItem[]=[];
  public aProjectManager:SelectItem[]=[];
  public aProjectStakeholder:SelectItem[]=[];

  categories:Category[];
  centricScores:CentricScore[];
  mapCodes:MapCode[];
  departments:Department[];
  public items:Array<any> = [];
  project:Projects={
    Status:"Defined",
    DepartmentID:"0", 
    ProjectCategoryID:"0",
    CustomerCentricScoreID:"0",
    CustomerMapCodeID:"0",
    ProjectID: UUID.UUID()
  };  
  isNew:boolean=true;
  projectForm : FormGroup;
  projectDependencies:ProjectDependencies;
  
  mainBack(){
    this.router.navigate(['../Projects'])
  }

  goToTask(){
    // this.aProjectManager=[];
    this.router.navigate(['../Projects/Tasks',this.project.ProjectID]);
  }

  async save(){
    this.project.ProjectManager= JSON.stringify(this.aProjectManager);
    this.project.ProjectSponsor= JSON.stringify(this.aProjectSponsor);
    this.project.ProjectStakeHolder= JSON.stringify(this.aProjectStakeholder);
    if(confirm('Are you sure you want to save?')){
      if(this.isNew){
        var a = await this.projectSvc.postProject(this.project);
        this.router.navigate(['../Projects/Details',this.project.ProjectID]);
      }
      else{
        var a = await this.projectSvc.putProject(this.project);
      }
      alert('Successfully Saved');
    }
    // sessionStorage.setItem("Projects",a)
    // var ans = confirm("No Tasks added. Do you want to add project task first?");
    // ans ? this.router.navigate(['../Projects/MainTasks']) : (alert('Project Successfully saved'), this.router.navigate(['../Projects']));
  }

  constructor(private router:Router, private activatedroute: ActivatedRoute,
    private consvc:ContactService, private pdSvc:ProjectDependenciesService,
    private fb:FormBuilder,private projectSvc:ProjectService) { 
    this.projectForm = this.fb.group({
      StakeHolder:[]
    });
    this.projectForm.valueChanges.subscribe(()=>{
      var Value = this.projectForm.controls['StakeHolder'].value
      console.log(Value);

    });
  }
  
  async ngOnInit() {
    var projectID = this.activatedroute.snapshot.params['projectID'];
    if(projectID!=null){
      this.project = await this.projectSvc.getProject(projectID);
      this.aProjectManager = await JSON.parse(this.project.ProjectManager);
      this.aProjectSponsor = await JSON.parse(this.project.ProjectSponsor);
      this.aProjectStakeholder = await JSON.parse(this.project.ProjectStakeHolder);
      var startDate = await new Date(this.project.StartDate)
      var endDate = await new Date(this.project.EndDate)
      var targetDate = await new Date(this.project.ProjectTargetDate)
      this.project.StartDate =await startDate.getFullYear()+"-"+this.getNumber(startDate.getMonth()+1)+"-"+this.getNumber(startDate.getDate());
      this.project.EndDate =await endDate.getFullYear()+"-"+this.getNumber(endDate.getMonth()+1)+"-"+this.getNumber(endDate.getDate());
      this.project.ProjectTargetDate =await targetDate.getFullYear()+"-"+this.getNumber(targetDate.getMonth()+1)+"-"+this.getNumber(targetDate.getDate());
      this.isNew=false;
    }
    else{
      this.isNew=true;
    }

    this.projectDependencies=await this.pdSvc.getDependencies();
    this.categories=await this.projectDependencies.Categories;
    this.centricScores=await this.projectDependencies.CentricScores;
    this.mapCodes=await this.projectDependencies.MapCodes;
    this.departments=await this.projectDependencies.Departments;
  }

  getNumber(num:number):string{
    if(num<10){
      return "0"+num;
    }
    else{
      return num.toString();
    }
  }

  async onSearchChange(event:any,searchValue : string ) {  
    try{
      this.items = <SelectItem[]>await this.consvc.getWorkday2(searchValue,20)
    }
    catch{
      
    }
  }
  public selected(value:any):void {
    console.log('Selected value is: ', value);
  }
 
  public removed(value:any):void {
    console.log('Removed value is: ', value);
  }
 
  public refreshValue(value:any,id:number):void {
    // this.selectedItems = value;
    if(id==0){
      //project sponsor
      this.aProjectSponsor = value;
    }
    if(id==1){
      //project manager
      this.aProjectManager= value;
    }
    if(id==2){
      //project stakeholder
      this.aProjectStakeholder=value;
    }
  }
 
  public itemsToString(value:Array<any> = []):string {
    return value
      .map((item:any) => {
        return item.text;
      }).join(',');
  } 
}
