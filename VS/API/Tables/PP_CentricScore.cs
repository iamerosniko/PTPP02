using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace API.Tables
{
  [Table("PP_CentricScores")]
  public class PP_CentricScore
  {
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public Guid CentricScoreID { get; set; }
    public string Score { get; set; }
    public string ScoreDesc { get; set; }
    public string GroupName { get; set; }

  }
}
