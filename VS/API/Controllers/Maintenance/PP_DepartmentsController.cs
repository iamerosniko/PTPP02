using API.Tables;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Controllers.Maintenance
{
  [EnableCors("CORS")]
  [Produces("application/json")]
  [Route("api/PP_Departments")]
  public class PP_DepartmentsController : Controller
  {
    private readonly Context _context;

    public PP_DepartmentsController(Context context)
    {
      _context = context;
    }

    // GET: api/PP_Department
    [HttpGet]
    public IEnumerable<PP_Department> GetDepartments()
    {
      return _context.Departments;
    }

    // GET: api/PP_Department/5
    [HttpGet("{id}")]
    public async Task<IActionResult> GetPP_Department([FromRoute] Guid id)
    {
      if (!ModelState.IsValid)
      {
        return BadRequest(ModelState);
      }

      var pP_Department = await _context.Departments.SingleOrDefaultAsync(m => m.DepartmentID == id);

      if (pP_Department == null)
      {
        return NotFound();
      }

      return Ok(pP_Department);
    }

    // PUT: api/PP_Department/5
    [HttpPut("{id}")]
    public async Task<IActionResult> PutPP_Department([FromRoute] Guid id, [FromBody] PP_Department pP_Department)
    {
      if (!ModelState.IsValid)
      {
        return BadRequest(ModelState);
      }

      if (id != pP_Department.DepartmentID)
      {
        return BadRequest();
      }

      _context.Entry(pP_Department).State = EntityState.Modified;

      try
      {
        await _context.SaveChangesAsync();
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!PP_DepartmentExists(id))
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

    // POST: api/PP_Department
    [HttpPost]
    public async Task<IActionResult> PostPP_Department([FromBody] PP_Department pP_Department)
    {
      if (!ModelState.IsValid)
      {
        return BadRequest(ModelState);
      }

      _context.Departments.Add(pP_Department);
      await _context.SaveChangesAsync();

      return CreatedAtAction("GetPP_Department", new { id = pP_Department.DepartmentID }, pP_Department);
    }

    // DELETE: api/PP_Department/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeletePP_Department([FromRoute] Guid id)
    {
      if (!ModelState.IsValid)
      {
        return BadRequest(ModelState);
      }

      var pP_Department = await _context.Departments.SingleOrDefaultAsync(m => m.DepartmentID == id);
      if (pP_Department == null)
      {
        return NotFound();
      }

      _context.Departments.Remove(pP_Department);
      await _context.SaveChangesAsync();

      return Ok(pP_Department);
    }

    private bool PP_DepartmentExists(Guid id)
    {
      return _context.Departments.Any(e => e.DepartmentID == id);
    }
  }
}
