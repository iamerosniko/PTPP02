using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace API.Tables
{
  [Table("PP_CentricScores")]
  public class PP_CentricScore
  {
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int CentricScoreID { get; set; }
    public int Score { get; set; }
    public string ScoreDesc { get; set; }
    public string GroupName { get; set; }

  }
}
