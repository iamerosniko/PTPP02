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
    public string ProjectOverview { get; set; }
    public Guid DepartmentID { get; set; }
    public DateTime DateAdded { get; set; }
    public Guid ProjectCategory { get; set; }
    public Guid ProjectSponsor { get; set; }
    public string ProjectNumber { get; set; }
    public Guid ProjectManager { get; set; }
    public string CustomerMapCode { get; set; }
    public Guid ProjectStakeHolder { get; set; }
    public Guid CustomerCentricScore { get; set; }
    public DateTime StartDate { get; set; }
    public Guid Status { get; set; }
    public DateTime EndDate { get; set; }
    public DateTime ProjectTargetDate { get; set; }
    public bool EndDateChanged { get; set; }

  }
}
