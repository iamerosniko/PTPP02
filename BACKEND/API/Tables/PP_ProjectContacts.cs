using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace API.Tables
{
  [Table("PP_ProjectContacts")]

  public class PP_ProjectContacts
  {
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public Guid MainID { get; set; }
    // accepts json [{},{},{},{},{}] limit to 5
    public string Contacts { get; set; }
    public string Type { get; set; }
    public string GroupName { get; set; }

  }
}
