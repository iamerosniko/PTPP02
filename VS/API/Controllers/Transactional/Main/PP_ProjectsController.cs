using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using API.Tables;

namespace API.Controllers.Transactional.Main
{
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
        public IEnumerable<PP_Projects> GetProjects()
        {
            return _context.Projects;
        }

        // GET: api/PP_Projects/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetPP_Projects([FromRoute] Guid id)
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

            return Ok(pP_Projects);
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