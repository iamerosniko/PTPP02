using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace API.Tables
{
  [Table("PP_TaskStatuses")]
  public class PP_TaskStatuses
  {
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int TaskStatusID { get; set; }
    public string TaskStatus { get; set; }
  }
}
