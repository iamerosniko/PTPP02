using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace API.Tables
{
  [Table("PP_Categories")]

  public class PP_Category
  {
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public Guid CategoryID { get; set; }
    public string Category { get; set; }
    public string GroupName { get; set; }
  }
}
