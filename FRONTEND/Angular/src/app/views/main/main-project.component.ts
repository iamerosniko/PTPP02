import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Projects, SelectItem } from "../../entities/entities";
import { ProjectService } from "../../services/services";
@Component({
  selector: "app-main",
  templateUrl: "./main-project.component.html",
  styleUrls: ["./main-project.component.css"]
})
export class MainProjectComponent {
  newProject() {
    this.router.navigate(["../Projects/Details"]);
  }
  editProject(project: Projects) {
    this.router.navigate(["../Projects/Details", project.ProjectID]);
  }
  mainDelete() {
    this.router.navigate(["../Projects/MainDelete"]);
  }

  public projects: Projects[] = [];

  constructor(private router: Router, private projectService: ProjectService) {}

  async ngOnInit() {
    this.projects = await this.projectService.getProjects();
  }

  async delete(project: Projects) {
    if (confirm("Delete this project?")) {
      var result = await this.projectService.deleteProject(project.ProjectID);
      console.log(result);
      await this.ngOnInit();
    }
  }

  extractDetails(sponsor: string): string {
    if (sponsor != null) {
      var items: SelectItem[] = JSON.parse(sponsor);
      var people: string = "";
      items.forEach(item => {
        people += item.text + ", ";
      });
      return people;
    } else {
      return "";
    }
  }

  async deleteProject(project: Projects) {
    var result = await this.projectService.deleteProject(project.ProjectID);
    console.log(result);
  }
}
