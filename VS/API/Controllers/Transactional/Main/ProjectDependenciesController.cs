using API.Models.Main;
using API.Tables;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System.Linq;

namespace API.Controllers.Transactional.Main
{
  [EnableCors("CORS")]
  [Produces("application/json")]
  [Route("api/ProjectDependencies")]
  public class ProjectDependenciesController : Controller
  {
    private readonly Context _context;

    public ProjectDependenciesController(Context context)
    {
      _context = context;
    }

    [HttpGet]
    public ProjectDependencies GetDependencies()
    {
      ProjectDependencies projectDependencies = new ProjectDependencies();
      projectDependencies.Categories = _context.Categories.ToList();
      projectDependencies.CentricScores = _context.CentricScores.ToList();
      projectDependencies.Contacts = _context.Contacts.ToList();
      projectDependencies.Departments = _context.Departments.ToList();
      projectDependencies.MapCodes = _context.MapCodes.ToList();

      return projectDependencies;

    }
  }
}
