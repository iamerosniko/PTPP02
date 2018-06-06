import { Component, OnInit } from '@angular/core';
import { Router, Routes, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { CentricScoreService } from '../../../../services/services'
import { CentricScore } from '../../../../entities/entities'
@Component({
  selector: 'app-customer-centricscore-addedit',
  templateUrl: './customer-centricscore-addedit.component.html',
  styleUrls: ['./customer-centricscore-addedit.component.css']
})
export class CustomerCentricscoreAddeditComponent implements OnInit {

  cuscenBack(){
    this.router.navigate(['../Maintenance', {outlets: {'mroute': ['CustomerCentrics']}}])
  }
  
  centricScoreID:string; // for getting ID of a department if route is for edit
  formState:string; // for new / edit label to template
  centricScoreForm = new FormGroup({}); // reactiveform
  centricScore:CentricScore={};

  constructor(private router:Router,private csSvc : CentricScoreService,
    private fb:FormBuilder,private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.router.url.includes("New") ? this.formState ="New" : this.formState = "Edit";
    this.centricScoreID = this.activatedRoute.snapshot.params['centricScoreID'];
    this.centricScoreID!=null ? this.getDependencies() : null;
    this.centricScore.GroupName='JHSS';
    this.centricScoreForm = this.fb.group({
      Score : [this.centricScore.Score,Validators.required],
      ScoreDesc : [this.centricScore.ScoreDesc],
      GroupName : [this.centricScore.GroupName],
    });
  }

  async getDependencies(){
    this.centricScore = <CentricScore> await this.csSvc.getCentricScore(this.centricScoreID);
    console.log(this.centricScore)
    
    this.centricScoreForm = this.fb.group({
      CentricScoreID:[this.centricScore.CentricScoreID],
      Score : [this.centricScore.Score,Validators.required],
      ScoreDesc : [this.centricScore.ScoreDesc],
      GroupName : [this.centricScore.GroupName],
    })
  }

  async save() {
    this.centricScore=await this.centricScoreForm.value;
    //for comparison
    var result:CentricScore ={};
    if(this.centricScore.CentricScoreID==null){
      result = <CentricScore> await this.csSvc.postCentricScore(this.centricScore);
    }
    else{
      result = <CentricScore> await this.csSvc.putCentricScore(this.centricScore);
    }
    console.log(result);
    if(result!=null)
    {
      await alert("Successfully saved!");
      this.cuscenBack();
    }  
  }

}
