using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace API.Tables
{
  [Table("PP_Main")]

  public class PP_Main
  {
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int MainID { get; set; }
    //departments
    public int DepartmentID { get; set; }
    //category 
    public int CategoryID { get; set; }
    // accepts json [{},{},{},{},{}] limit to 5
    public string MapCode { get; set; }
    // centric score
    public int CentricScoreID { get; set; }
    public string Status { get; set; }
    public DateTime TargetDate { get; set; }
    public int TaskCompleted { get; set; }
    public int TaskInProgress { get; set; }
    public int TaskUpcoming { get; set; }
    public DateTime DateAdded { get; set; }
    public string Overview { get; set; }
    public DateTime DateStarted { get; set; }
    public DateTime DateEnded { get; set; }
    public DateTime DatePrevious { get; set; }
    public string GroupName { get; set; }

  }
}
