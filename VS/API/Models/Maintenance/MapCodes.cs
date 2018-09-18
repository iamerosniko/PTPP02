using System;

namespace API.Models.Maintenance
{
  public class MapCodes
  {
    public Guid MapCodeID { get; set; }
    public string MapCode { get; set; }
    public string GroupName { get; set; }
    public bool CanDelete { get; set; }
  }
}
