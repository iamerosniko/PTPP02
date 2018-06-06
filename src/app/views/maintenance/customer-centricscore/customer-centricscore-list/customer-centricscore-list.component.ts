import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { CentricScoreService } from '../../../../services/services';
import { CentricScore } from '../../../../entities/entities';
@Component({
  selector: 'app-customer-centricscore-list',
  templateUrl: './customer-centricscore-list.component.html',
  styleUrls: ['./customer-centricscore-list.component.css']
})
export class CustomerCentricscoreListComponent implements OnInit {
  centricScores:CentricScore[]=[];
  
  cuscenDetails(cus:CentricScore){
    if(cus==null)
      this.router.navigate(['../Maintenance', {outlets: {'mroute': ['CustomerCentricsNew']}}]);
    else
      this.router.navigate(['../Maintenance', {outlets: {'mroute': ['CustomerCentricsEdit',cus.CentricScoreID]}}]);
  }

  cuscenDelete(cus:CentricScore){
    this.router.navigate(['../Maintenance', {outlets:{'mroute': ['CustomerCentricsDelete',cus.CentricScoreID]}}])
  }

  constructor(private router:Router,private cusSvc: CentricScoreService) { }

  async ngOnInit() {
    await this.getDependencies();
  }

  async getDependencies(){
    this.centricScores = <CentricScore[]> await this.cusSvc.getCentricScores();
  }
}
