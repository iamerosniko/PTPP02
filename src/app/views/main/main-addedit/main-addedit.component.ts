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
    this.router.navigate(['../Main'])
  }
  save(){
    this.router.navigate(['../Main/MainTasks'])
  }
  constructor(private router:Router, private pdSvc:ProjectDependenciesService) { }

  async ngOnInit() {
    console.log(await this.pdSvc.getDependencies());
  }

}
