import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { SearchDetailsComponent } from './search-details/search-details.component';
import { SearchTasksComponent } from './search-tasks/search-tasks.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SearchComponent, SearchDetailsComponent, SearchTasksComponent]
})
export class SearchModule { }
