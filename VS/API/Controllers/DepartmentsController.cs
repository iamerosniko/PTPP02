using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using API.Tables;

namespace API.Controllers
{
    [Produces("application/json")]
    [Route("api/Departments")]
    public class DepartmentsController : Controller
    {
        private readonly Context _context;

        public DepartmentsController(Context context)
        {
            _context = context;
        }

        // GET: api/Departments
        [HttpGet]
        public IEnumerable<PP_Department> GetDepartments()
        {
            return _context.Departments;
        }

        // GET: api/Departments/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetPP_Department([FromRoute] int id)
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

        // PUT: api/Departments/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPP_Department([FromRoute] int id, [FromBody] PP_Department pP_Department)
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

        // POST: api/Departments
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

        // DELETE: api/Departments/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePP_Department([FromRoute] int id)
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

        private bool PP_DepartmentExists(int id)
        {
            return _context.Departments.Any(e => e.DepartmentID == id);
        }
    }
}