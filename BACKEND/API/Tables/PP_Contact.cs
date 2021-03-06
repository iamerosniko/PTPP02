using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace API.Tables
{
  [Table("PP_Contacts")]
  public class PP_Contact
  {
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public Guid ContactID { get; set; }
    public string ContactName { get; set; }
    public string LastName { get; set; }
    public string GroupName { get; set; }

  }
}
