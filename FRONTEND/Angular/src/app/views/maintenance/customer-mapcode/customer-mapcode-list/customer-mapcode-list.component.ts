import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { MapCodeService } from '../../../../services/services';
import { MapCode } from '../../../../entities/entities';
@Component({
  selector: 'app-customer-mapcode-list',
  templateUrl: './customer-mapcode-list.component.html',
  styleUrls: ['./customer-mapcode-list.component.css']
})
export class CustomerMapcodeListComponent implements OnInit {
  mapCodes:MapCode[]=[];

  cusmapDetails(mc:MapCode){
    if(mc==null)
      this.router.navigate(['../Maintenance', {outlets: {'mroute': ['CustomerMapsNew']}}]);
    else
      this.router.navigate(['../Maintenance', {outlets: {'mroute': ['CustomerMapsEdit',mc.MapCodeID]}}]);
  }

  cusmapDelete(mc:MapCode ){
    this.router.navigate(['../Maintenance', {outlets: {'mroute': ['CustomerMapsDelete',mc.MapCodeID]}}])
  };

  constructor(private router:Router,private mcSvc: MapCodeService) { }

  async ngOnInit() {
    await this.getDependencies();
    await console.log(this.mapCodes)
  }

  async getDependencies(){
    this.mapCodes = <MapCode[]> await this.mcSvc.getMapcodes();
  }
}
