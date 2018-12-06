using API.Tables;
using System.Collections.Generic;
namespace API.Models.Main
{
  public class ProjectDependencies
  {
    public List<PP_Category> Categories { get; set; }
    public List<PP_CentricScore> CentricScores { get; set; }
    public List<PP_Contact> Contacts { get; set; }
    public List<PP_MapCode> MapCodes { get; set; }
    public List<PP_Department> Departments { get; set; }
  }
}
