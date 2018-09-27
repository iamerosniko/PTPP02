import { Component, OnInit } from '@angular/core';
import { Router, Routes, ActivatedRoute } from '@angular/router';
import { ProjectDependenciesService,ContactService } from '../../../services/services';
import { Category,CentricScore,MapCode,Department,Contact,WorkdayContact,WorkdayFormat,ProjectDependencies,SelectItem  } from '../../../entities/entities';
@Component({
  selector: 'app-main-addedit',
  templateUrl: './main-addedit.component.html',
  styleUrls: ['./main-addedit.component.css']
})
export class MainAddeditComponent implements OnInit {
  public WDFormat:WorkdayFormat={};
  public WDContacts2:WorkdayContact[]
  public WDContacts:WorkdayContact[]

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



  constructor(private router:Router,private consvc:ContactService, private pdSvc:ProjectDependenciesService) { }
  public selectedItems:SelectItem[] = [];
  public active_tags:SelectItem[] = [{id:'a',text:'banana'}];

  categories:Category[];
  centricScores:CentricScore[];
  mapCodes:MapCode[];
  departments:Department[];
  contacts:Contact[];
  public items:Array<any> = [
    ]
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

  async onSearchChange(searchValue : string ) {  
    console.log(searchValue);
    console.log(JSON.stringify(this.active_tags))

    // console.log(await this.consvc.getWorkday(searchValue));
    this.WDFormat=<WorkdayFormat>await this.consvc.getWorkday(searchValue);
    this.WDContacts2=<WorkdayContact[]>await this.WDFormat.data;
    console.log(<WorkdayContact[]>this.WDContacts2)
    this.WDContacts=[];
    this.WDContacts2.forEach(element => {
      this.WDContacts.push({full_name:element.full_name})
    });
  }

  async prepareMultipleLists(){
    this.items=[];
    this.contacts.forEach( contact => {
      this.items.push({ 'id': contact.ContactID, 'text':contact.ContactName+ ' ' + contact.LastName})
      // this.items.push(new SelectItem(contact.CategoryID,contact.Category))
      // this.items.push(contact.ContactName + ' ' + contact.LastName )
    });

    await console.log(this.items)
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
