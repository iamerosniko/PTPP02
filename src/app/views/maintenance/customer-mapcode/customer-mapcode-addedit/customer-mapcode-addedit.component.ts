import { Component, OnInit } from '@angular/core';
import { Router, Routes, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MapCodeService } from '../../../../services/services'
import { MapCode } from '../../../../entities/entities'
@Component({
  selector: 'app-customer-mapcode-addedit',
  templateUrl: './customer-mapcode-addedit.component.html',
  styleUrls: ['./customer-mapcode-addedit.component.css']
})
export class CustomerMapcodeAddeditComponent implements OnInit {

  cusmapBack(){
    this.router.navigate(['../Maintenance', {outlets: {'mroute': ['CustomerMaps']}}])
  }

  mapCodeID:string; // for getting ID of a department if route is for edit
  formState:string; // for new / edit label to template
  mapCodeForm = new FormGroup({}); // reactiveform
  mapCode:MapCode={};

  constructor(private router:Router,private mcSvc : MapCodeService,
    private fb:FormBuilder,private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.router.url.includes("New") ? this.formState ="New" : this.formState = "Edit";
    this.mapCodeID = this.activatedRoute.snapshot.params['mapID'];
    this.mapCodeID!=null ? this.getDependencies() : null;
    this.mapCode.GroupName='JHSS';
    this.mapCodeForm = this.fb.group({
      MapCode : [this.mapCode.MapCode,Validators.required],
      GroupName : [this.mapCode.GroupName],
    });
  }

  async getDependencies(){
    this.mapCode = <MapCode> await this.mcSvc.getMapcode(this.mapCodeID);
    console.log(this.mapCode)
    
    this.mapCodeForm = this.fb.group({
      MapCodeID:[this.mapCode.MapCodeID],
      MapCode : [this.mapCode.MapCode,Validators.required],
      GroupName : [this.mapCode.GroupName],
    })
  }

  async save() {
    this.mapCode=await this.mapCodeForm.value;
    //for comparison
    var result:MapCode ={};
    if(this.mapCode.MapCodeID==null){
      result = <MapCode> await this.mcSvc.postMapcode(this.mapCode);
    }
    else{
      result = <MapCode> await this.mcSvc.putMapcode(this.mapCode);
    }
    console.log(result);
    if(result!=null)
    {
      await alert("Successfully saved!");
      this.cusmapBack();
    }  
  }

}
