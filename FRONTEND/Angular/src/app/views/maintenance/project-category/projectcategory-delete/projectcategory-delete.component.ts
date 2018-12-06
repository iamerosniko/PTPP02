import { Component, OnInit } from '@angular/core';
import { Router, Routes, ActivatedRoute } from '@angular/router';
import { CategoryService } from '../../../../services/services'
import { Category } from '../../../../entities/entities'
@Component({
  selector: 'app-projectcategory-delete',
  templateUrl: './projectcategory-delete.component.html',
  styleUrls: ['./projectcategory-delete.component.css']
})
export class ProjectcategoryDeleteComponent implements OnInit {

  procatBack(){
    this.router.navigate(['../Maintenance', {outlets: {'mroute': ['ProjectCategories']}}])
  };

  categoryID:string; // for getting ID of a department if route is for edit
  category:Category={};

  constructor(private router:Router,private catSvc : CategoryService,
    private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.categoryID = this.activatedRoute.snapshot.params['categoryID'];
    this.getDependencies();
  }

  async getDependencies(){
    this.category = <Category> await this.catSvc.getCategory(this.categoryID);
  }

  async delete(){
    var temp = <Category> await this.catSvc.deleteCategory(this.categoryID);
    if(temp!=null){
      await alert("Successfully deleted!");
      this.procatBack();
    }
  }
}
