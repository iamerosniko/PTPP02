import { Component, OnInit, style } from "@angular/core";

@Component({
  selector: "app-maintenance",
  templateUrl: "./maintenance.component.html",
  styleUrls: ["./maintenance.component.css"]
})
export class MaintenanceComponent implements OnInit {
  public tabstyle = "";
  tabclick() {
    if (this.tabstyle == "department") {
      console.log(this.tabstyle);
    }
    if (this.tabstyle == "projectcategory") {
      console.log(this.tabstyle);
    }
    if (this.tabstyle == "customermapcode") {
      console.log(this.tabstyle);
    }
    if (this.tabstyle == "customercentricscore") {
      console.log(this.tabstyle);
    }
    if (this.tabstyle == "contacts") {
      console.log(this.tabstyle);
    }
  }
  departmenttabclick() {
    this.tabstyle = "department";
    this.tabclick();
  }
  projectcategorytabclick() {
    this.tabstyle = "projectcategory";
    this.tabclick();
  }
  customermapcodetabclick() {
    this.tabstyle = "customermapcode";
    this.tabclick();
  }
  customercentricscoretabclick() {
    this.tabstyle = "customercentricscore";
    this.tabclick();
  }
  contactstabclick() {
    this.tabstyle = "contacts";
    this.tabclick();
  }

  constructor() {}
  selectedName: number = 0;
  ngOnInit() {}
}
