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
    public Guid ProjectID { get; set; }
    public Guid DepartmentID { get; set; }
    public Guid ProjectCategory { get; set; }
    public Guid CustomerMapCode { get; set; }
    public Guid CustomerCentricScore { get; set; }
    public string ProjectNumber { get; set; }
    public string ProjectOverview { get; set; }
    //json strings
    public string ProjectManager { get; set; }
    public string ProjectSponsor { get; set; }
    public string ProjectStakeHolder { get; set; }
    //json strings
    public string Status { get; set; }
    public DateTime DateAdded { get; set; }
    public DateTime StartDate { get; set; }
    public DateTime EndDate { get; set; }
    public DateTime ProjectTargetDate { get; set; }
    public bool EndDateChanged { get; set; }
  }
}
