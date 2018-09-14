import { Component, OnInit } from '@angular/core';
import { Router, Routes, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { CategoryService } from '../../../../services/services'
import { Category } from '../../../../entities/entities'
@Component({
  selector: 'app-projectcategory-addedit',
  templateUrl: './projectcategory-addedit.component.html',
  styleUrls: ['./projectcategory-addedit.component.css']
})
export class ProjectcategoryAddeditComponent implements OnInit {

  procatBack(){
    this.router.navigate(['../Maintenance', {outlets: {'mroute': ['ProjectCategories']}}])
  };

  categoryID:string; // for getting ID of a department if route is for edit
  formState:string; // for new / edit label to template
  categoryForm = new FormGroup({}); // reactiveform
  category:Category={};

  constructor(private router:Router,private catSvc : CategoryService,
    private fb:FormBuilder,private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.router.url.includes("New") ? this.formState ="New" : this.formState = "Edit";
    this.categoryID = this.activatedRoute.snapshot.params['categoryID'];
    this.categoryID!=null ? this.getDependencies() : null;
    this.category.GroupName='JHSS';
    this.categoryForm = this.fb.group({
      Category : [this.category.Category,Validators.required],
      GroupName : [this.category.GroupName],
    });
  }

  async getDependencies(){
    this.category = <Category> await this.catSvc.getCategory(this.categoryID);
    console.log(this.category)
    
    this.categoryForm = this.fb.group({
      CategoryID:[this.category.CategoryID],
      Category : [this.category.Category,Validators.required],
      GroupName : [this.category.GroupName],
    })
  }

  async save() {
    this.category=await this.categoryForm.value;
    //for comparison
    var result:Category ={};
    if(this.category.CategoryID==null){
      result = <Category> await this.catSvc.postCategory(this.category);
    }
    else{
      result = <Category> await this.catSvc.putCategory(this.category);
    }
    console.log(result);
    if(result!=null)
    {
      await alert("Successfully saved!");
      this.procatBack();
    }  
  }
}
