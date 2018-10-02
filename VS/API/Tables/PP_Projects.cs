using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace API.Tables
{
  [Table("PP_Project")]
  public class PP_Projects
  {
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public Guid ProjectID { get; set; } //hidden
    public Guid DepartmentID { get; set; } //departments
    public Guid ProjectCategory { get; set; } //category
    public Guid CustomerMapCode { get; set; } //mapcode
    public Guid CustomerCentricScore { get; set; } //centricscore
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
  }
}
