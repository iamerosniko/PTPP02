using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace API.Tables
{
  [Table("PP_MapCodes")]
  public class PP_MapCode
  {
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int MapCodeID { get; set; }
    public string MapCode { get; set; }
  }
}
