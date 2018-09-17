using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace API.Tables
{
  [Table("PP_Departments")]
  public class PP_Department
  {
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public Guid DepartmentID { get; set; }
    public string Department { get; set; }
    public string GroupName { get; set; }

  }
}
