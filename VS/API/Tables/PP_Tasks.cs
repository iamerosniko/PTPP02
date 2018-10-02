using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace API.Tables
{
  [Table("PP_Tasks")]
  public class PP_Tasks
  {
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public Guid TaskID { get; set; }
    public Guid ProjectID { get; set; }
    public string TaskDesc { get; set; }
    public string TaskStatus { get; set; }
  }
}
