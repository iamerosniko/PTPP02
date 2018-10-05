using System;

namespace API.Models.Main
{
  public class ProjectstDTO
  {
    public Guid ProjectID { get; set; } //hidden
    public Guid DepartmentID { get; set; } //departments
    public string Department { get; set; }
    public Guid ProjectCategoryID { get; set; } //category
    public string Category { get; set; }
    public Guid CustomerMapCodeID { get; set; } //mapcode
    public string MapCode { get; set; }
    public Guid CustomerCentricScoreID { get; set; } //centricscore
    public string Score { get; set; }
    public string ProjectNumber { get; set; } //autogen
    public string ProjectOverview { get; set; } //project overview
    //json strings
    public string ProjectManager { get; set; }
    public string ProjectSponsor { get; set; }
    public string ProjectStakeHolder { get; set; }
    //json strings
    public string Status { get; set; } //disabled
    public int NumberOfTasks { get; set; } //disabled
    public DateTime StartDate { get; set; }
    public DateTime EndDate { get; set; }
    public DateTime ProjectTargetDate { get; set; }
    public bool EndDateChanged { get; set; } //disabled
    public string GroupName { get; set; }

  }
}
