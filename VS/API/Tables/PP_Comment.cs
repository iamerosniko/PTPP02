using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace API.Tables
{
  [Table("PP_Comments")]

  public class PP_Comment
  {
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int MainID { get; set; }
    public DateTime DateCreated { get; set; }
    public string FullName { get; set; }
    public string Comment { get; set; }
    public string GroupName { get; set; }

  }
}
