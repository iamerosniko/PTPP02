using System;

namespace API.Models.Maintenance
{
  public class CentricScores
  {
    public Guid CentricScoreID { get; set; }
    public string Score { get; set; }
    public string ScoreDesc { get; set; }
    public string GroupName { get; set; }
    public bool CanDelete { get; set; }
  }
}
