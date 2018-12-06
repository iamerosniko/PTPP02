using System;

namespace API.Models.Maintenance
{
  public class Departments
  {
    public Guid DepartmentID { get; set; }
    public string Department { get; set; }
    public string GroupName { get; set; }
    public bool CanDelete { get; set; }
  }
}
