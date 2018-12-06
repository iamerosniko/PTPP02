import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import {
  TaskService,
  ProjectService,
  TaskStatusesService
} from "../../../services/services";
import { Tasks, Projects, TaskStatuses } from "../../../entities/entities";
import { UUID } from "angular2-uuid";
@Component({
  selector: "app-main-tasks",
  templateUrl: "./main-tasks.component.html",
  styleUrls: ["./main-tasks.component.css"]
})
export class MainTasksComponent implements OnInit {
  constructor(
    private router: Router,
    private activatedroute: ActivatedRoute,
    private taskSvc: TaskService,
    private projSvc: ProjectService,
    private taskStatusSvc: TaskStatusesService
  ) {}

  task: Tasks = { TaskStatus: "Defined" };
  proj: Projects = {};
  tasks: Tasks[] = [];
  searchTask: string = "";
  viewTask: Tasks[] = [];
  taskStatuses: TaskStatuses[] = [];

  async refresh() {
    //get task where project_id = projectID
    var projectID = await this.activatedroute.snapshot.params["projectID"];
    this.tasks = <Tasks[]>await this.taskSvc.getTask(projectID);
    await this.searchTaskDescription();
    this.proj = <Projects>await this.projSvc.getProject(projectID);
    this.proj.NumberOfTasks = await this.tasks.length;
    await this.projSvc.putProject(this.proj);
    this.task.ProjectID = await projectID;
  }

  async searchTaskDescription() {
    this.viewTask = await this.tasks.filter(x =>
      x.TaskDesc.match(this.searchTask)
    );
  }

  async ngOnInit() {
    this.refresh();
    this.taskStatuses = <TaskStatuses[]>(
      await this.taskStatusSvc.getTaskStatuses()
    );
  }

  async addNew() {
    var taskID = await UUID.UUID();
    this.task.TaskID = await taskID;
    await this.taskSvc.postTask(this.task);
    this.task.TaskDesc = await "";
    await this.refresh();
  }

  async changeStatus(task: Tasks) {
    await this.taskSvc.putTask(task);
    await this.refresh();
  }

  mainBack() {
    var projectID = this.activatedroute.snapshot.params["projectID"];
    this.router.navigate(["../Projects/Details", projectID]);
  }
}
