import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MaintenanceComponent } from './maintenance.component';
import { MaintestComponent } from './maintest/maintest.component';
import { DepartmentListComponent } from './departments/department-list/department-list.component';
import { DepartmentAddeditComponent } from './departments/department-addedit/department-addedit.component';
import { DepartmentDeleteComponent } from './departments/department-delete/department-delete.component';
import { ProjectcategoryListComponent } from './project-category/projectcategory-list/projectcategory-list.component';
import { ProjectcategoryAddeditComponent } from './project-category/projectcategory-addedit/projectcategory-addedit.component';
import { CustomerMapcodeListComponent } from './customer-mapcode/customer-mapcode-list/customer-mapcode-list.component';
import { CustomerMapcodeAddeditComponent } from './customer-mapcode/customer-mapcode-addedit/customer-mapcode-addedit.component';
import { CustomerMapcodeDeleteComponent } from './customer-mapcode/customer-mapcode-delete/customer-mapcode-delete.component';
import { CustomerCentricscoreListComponent } from './customer-centricscore/customer-centricscore-list/customer-centricscore-list.component';
import { CustomerCentricscoreAddeditComponent } from './customer-centricscore/customer-centricscore-addedit/customer-centricscore-addedit.component';
import { CustomerCentricscoreDeleteComponent } from './customer-centricscore/customer-centricscore-delete/customer-centricscore-delete.component';
import { ContactsListComponent } from './contacts/contacts-list/contacts-list.component';
import { ContactsAddeditComponent } from './contacts/contacts-addedit/contacts-addedit.component';
import { ContactsDeleteComponent } from './contacts/contacts-delete/contacts-delete.component';
import { ProjectcategoryDeleteComponent } from './project-category/projectcategory-delete/projectcategory-delete.component';
import { CategoryService, CentricScoreService, ClientApiService, ClientApiSettings, ContactService, DepartmentService, MapCodeService} from '../../services/services'
@NgModule({
  imports: [
    FormsModule,ReactiveFormsModule,
    CommonModule,RouterModule
  ],
  providers:[  CategoryService, CentricScoreService, ClientApiService, ClientApiSettings, ContactService, DepartmentService, MapCodeService ],
  declarations: [MaintenanceComponent, MaintestComponent, DepartmentListComponent, DepartmentAddeditComponent, DepartmentDeleteComponent, ProjectcategoryListComponent, ProjectcategoryAddeditComponent, CustomerMapcodeListComponent, CustomerMapcodeAddeditComponent, CustomerMapcodeDeleteComponent, CustomerCentricscoreListComponent, CustomerCentricscoreAddeditComponent, CustomerCentricscoreDeleteComponent, ContactsListComponent, ContactsAddeditComponent, ContactsDeleteComponent, ProjectcategoryDeleteComponent]
})
export class MaintenanceModule { }
