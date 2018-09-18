using System;

namespace API.Models.Maintenance
{
  public class Contacts
  {
    public Guid ContactID { get; set; }
    public string ContactName { get; set; }
    public string LastName { get; set; }
    public string GroupName { get; set; }
    public bool CanDelete { get; set; }
  }
}
