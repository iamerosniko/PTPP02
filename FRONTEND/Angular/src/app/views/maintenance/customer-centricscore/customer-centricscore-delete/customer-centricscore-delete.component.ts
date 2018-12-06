import { Component, OnInit } from '@angular/core';
import { Router, Routes, ActivatedRoute } from '@angular/router';
import { CentricScoreService } from '../../../../services/services'
import { CentricScore } from '../../../../entities/entities'

@Component({
  selector: 'app-customer-centricscore-delete',
  templateUrl: './customer-centricscore-delete.component.html',
  styleUrls: ['./customer-centricscore-delete.component.css']
})
export class CustomerCentricscoreDeleteComponent implements OnInit {

  cuscenBack(){
    this.router.navigate(['../Maintenance', {outlets: {'mroute': ['CustomerCentrics']}}])
  }

  centricScoreID:string; // for getting ID of a department if route is for edit
  centricScore:CentricScore={};

  constructor(private router:Router,private csSvc : CentricScoreService,
    private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.centricScoreID = this.activatedRoute.snapshot.params['centricScoreID'];
    this.getDependencies();
  }

  async getDependencies(){
    this.centricScore = <CentricScore> await this.csSvc.getCentricScore(this.centricScoreID);
  }

  async delete(){
    var temp = <CentricScore> await this.csSvc.deleteCentricScore(this.centricScoreID);
    if(temp!=null){
      await alert("Successfully deleted!");
      this.cuscenBack();
    }
  }

}
