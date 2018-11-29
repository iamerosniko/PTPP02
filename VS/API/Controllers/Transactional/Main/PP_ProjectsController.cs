using API.Models.Main;
using API.Tables;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Controllers.Transactional.Main
{
  [EnableCors("CORS")]
  [Produces("application/json")]
  [Route("api/PP_Projects")]
  public class PP_ProjectsController : Controller
  {
    private readonly Context _context;

    public PP_ProjectsController(Context context)
    {
      _context = context;
    }

    // GET: api/PP_Projects
    [HttpGet]
    public List<ProjectstDTO> GetProjects()
    {
      List<ProjectstDTO> projects = new List<ProjectstDTO>();
      //dependencies
      var categoryList = _context.Categories.ToList();
      var scores = _context.CentricScores.ToList();
      var mapCodes = _context.MapCodes.ToList();
      var departments = _context.Departments.ToList();

      var projectList = _context.Projects.ToList();
      foreach (var proj in projectList)
      {
        ProjectstDTO project = new ProjectstDTO
        {
          Status = proj.Status,
          ProjectCategoryID = proj.ProjectCategoryID,
          Category = categoryList.Find(x => x.CategoryID == proj.ProjectCategoryID).Category,
          CustomerCentricScoreID = proj.CustomerCentricScoreID,
          Score = scores.Find(x => x.CentricScoreID == proj.CustomerCentricScoreID).Score,
          DepartmentID = proj.DepartmentID,
          Department = departments.Find(x => x.DepartmentID == proj.DepartmentID).Department,
          EndDate = proj.EndDate.ToShortDateString(),
          EndDateChanged = proj.EndDateChanged,
          GroupName = proj.GroupName,
          MapCode = mapCodes.Find(x => x.MapCodeID == proj.CustomerMapCodeID).MapCode,
          CustomerMapCodeID = proj.CustomerMapCodeID,
          NumberOfTasks = proj.NumberOfTasks,
          ProjectManager = proj.ProjectManager,
          ProjectOverview = proj.ProjectOverview,
          ProjectSponsor = proj.ProjectSponsor,
          ProjectNumber = proj.ProjectNumber,
          ProjectStakeHolder = proj.ProjectStakeHolder,
          ProjectTargetDate = proj.ProjectTargetDate.ToShortDateString(),
          StartDate = proj.StartDate.ToShortDateString(),
          ProjectID = proj.ProjectID
        };

        if (project != null)
        {
          projects.Add(project);
        }
      }

      return projects;
    }

    // GET: api/PP_Projects/5
    [HttpGet("{id}")]
    public async Task<IActionResult> GetPP_Projects([FromRoute] Guid id)
    {
      if (!ModelState.IsValid)
      {
        return BadRequest(ModelState);
      }

      var proj = await _context.Projects.SingleOrDefaultAsync(m => m.ProjectID == id);

      if (proj == null)
      {
        return NotFound();
      }
      var categoryList = _context.Categories.ToList();
      var scores = _context.CentricScores.ToList();
      var mapCodes = _context.MapCodes.ToList();
      var departments = _context.Departments.ToList();

      ProjectstDTO project = new ProjectstDTO
      {
        Status = proj.Status,
        ProjectCategoryID = proj.ProjectCategoryID,
        Category = categoryList.Find(x => x.CategoryID == proj.ProjectCategoryID).Category,
        CustomerCentricScoreID = proj.CustomerCentricScoreID,
        Score = scores.Find(x => x.CentricScoreID == proj.CustomerCentricScoreID).Score,
        DepartmentID = proj.DepartmentID,
        Department = departments.Find(x => x.DepartmentID == proj.DepartmentID).Department,
        EndDate = proj.EndDate.ToShortDateString(),
        EndDateChanged = proj.EndDateChanged,
        GroupName = proj.GroupName,
        MapCode = mapCodes.Find(x => x.MapCodeID == proj.CustomerMapCodeID).MapCode,
        CustomerMapCodeID = proj.CustomerMapCodeID,
        NumberOfTasks = proj.NumberOfTasks,
        ProjectManager = proj.ProjectManager,
        ProjectOverview = proj.ProjectOverview,
        ProjectSponsor = proj.ProjectSponsor,
        ProjectNumber = proj.ProjectNumber,
        ProjectStakeHolder = proj.ProjectStakeHolder,
        ProjectTargetDate = proj.ProjectTargetDate.ToShortDateString(),
        StartDate = proj.StartDate.ToShortDateString(),
        ProjectID = proj.ProjectID
      };


      return Ok(project);
    }

    // PUT: api/PP_Projects/5
    [HttpPut("{id}")]
    public async Task<IActionResult> PutPP_Projects([FromRoute] Guid id, [FromBody] PP_Projects pP_Projects)
    {
      if (!ModelState.IsValid)
      {
        return BadRequest(ModelState);
      }

      if (id != pP_Projects.ProjectID)
      {
        return BadRequest();
      }

      _context.Entry(pP_Projects).State = EntityState.Modified;

      try
      {
        await _context.SaveChangesAsync();
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!PP_ProjectsExists(id))
        {
          return NotFound();
        }
        else
        {
          throw;
        }
      }

      return NoContent();
    }

    // POST: api/PP_Projects
    [HttpPost]
    public async Task<IActionResult> PostPP_Projects([FromBody] PP_Projects pP_Projects)
    {
      if (!ModelState.IsValid)
      {
        return BadRequest(ModelState);
      }

      _context.Projects.Add(pP_Projects);
      await _context.SaveChangesAsync();

      return CreatedAtAction("GetPP_Projects", new { id = pP_Projects.ProjectID }, pP_Projects);
    }

    // DELETE: api/PP_Projects/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeletePP_Projects([FromRoute] Guid id)
    {
      if (!ModelState.IsValid)
      {
        return BadRequest(ModelState);
      }

      var pP_Projects = await _context.Projects.SingleOrDefaultAsync(m => m.ProjectID == id);
      if (pP_Projects == null)
      {
        return NotFound();
      }

      _context.Projects.Remove(pP_Projects);
      await _context.SaveChangesAsync();

      return Ok(pP_Projects);
    }

    private bool PP_ProjectsExists(Guid id)
    {
      return _context.Projects.Any(e => e.ProjectID == id);
    }
  }
}
