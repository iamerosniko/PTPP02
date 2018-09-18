using System;

namespace API.Models.Maintenance
{
  public class Categories
  {
    public Guid CategoryID { get; set; }
    public string Category { get; set; }
    public string GroupName { get; set; }
    public bool CanDelete { get; set; }
  }
}
