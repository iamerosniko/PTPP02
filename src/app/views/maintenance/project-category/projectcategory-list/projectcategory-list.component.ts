import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { CategoryService } from '../../../../services/services';
import { Category } from '../../../../entities/entities';
@Component({
  selector: 'app-projectcategory-list',
  templateUrl: './projectcategory-list.component.html',
  styleUrls: ['./projectcategory-list.component.css']
})
export class ProjectcategoryListComponent implements OnInit {
  categories:Category[]=[];

  procatDetails(cat:Category){
    if(cat==null)
      this.router.navigate(['../Maintenance', {outlets: {'mroute': ['ProjectCategoriesNew']}}]);
    else
      this.router.navigate(['../Maintenance', {outlets: {'mroute': ['ProjectCategoriesEdit',cat.CategoryID]}}]);
  };

  procatDelete(cat:Category){
    this.router.navigate(['../Maintenance', {outlets: {'mroute':['ProjectCategoriesDelete',cat.CategoryID]}}])
  };

  constructor(private router:Router,private catSvc: CategoryService) { }

  async ngOnInit() {
    await this.getDependencies();
    console.log(this.categories)
  }

  async getDependencies(){
    this.categories = <Category[]> await this.catSvc.getCategories();
  }
}
