import { Component, OnInit } from '@angular/core';
import { Router, Routes, ActivatedRoute } from '@angular/router';
import { MapCodeService } from '../../../../services/services'
import { MapCode } from '../../../../entities/entities'
@Component({
  selector: 'app-customer-mapcode-delete',
  templateUrl: './customer-mapcode-delete.component.html',
  styleUrls: ['./customer-mapcode-delete.component.css']
})
export class CustomerMapcodeDeleteComponent implements OnInit {

  cusmapBack(){
    this.router.navigate(['../Maintenance', {outlets: {'mroute': ['CustomerMaps']}}])
  }

  mapCodeID:string; // for getting ID of a department if route is for edit
  mapCode:MapCode={};

  constructor(private router:Router,private mcSvc : MapCodeService,
    private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.mapCodeID = this.activatedRoute.snapshot.params['mapID'];
    this.getDependencies();
  }

  async getDependencies(){
    this.mapCode = <MapCode> await this.mcSvc.getMapcode(this.mapCodeID);
  }

  async delete(){
    var temp = <MapCode> await this.mcSvc.deleteMapcode(this.mapCodeID);
    if(temp!=null){
      await alert("Successfully deleted!");
      this.cusmapBack();
    }
  }
}
