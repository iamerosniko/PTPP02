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
    [Route("api/ProjectContacts")]
    public class ProjectContactsController : Controller
    {
        private readonly Context _context;

        public ProjectContactsController(Context context)
        {
            _context = context;
        }

        // GET: api/ProjectContacts
        [HttpGet]
        public IEnumerable<PP_ProjectContacts> GetProjectContacts()
        {
            return _context.ProjectContacts;
        }

        // GET: api/ProjectContacts/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetPP_ProjectContacts([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var pP_ProjectContacts = await _context.ProjectContacts.SingleOrDefaultAsync(m => m.MainID == id);

            if (pP_ProjectContacts == null)
            {
                return NotFound();
            }

            return Ok(pP_ProjectContacts);
        }

        // PUT: api/ProjectContacts/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPP_ProjectContacts([FromRoute] int id, [FromBody] PP_ProjectContacts pP_ProjectContacts)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != pP_ProjectContacts.MainID)
            {
                return BadRequest();
            }

            _context.Entry(pP_ProjectContacts).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PP_ProjectContactsExists(id))
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

        // POST: api/ProjectContacts
        [HttpPost]
        public async Task<IActionResult> PostPP_ProjectContacts([FromBody] PP_ProjectContacts pP_ProjectContacts)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.ProjectContacts.Add(pP_ProjectContacts);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPP_ProjectContacts", new { id = pP_ProjectContacts.MainID }, pP_ProjectContacts);
        }

        // DELETE: api/ProjectContacts/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePP_ProjectContacts([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var pP_ProjectContacts = await _context.ProjectContacts.SingleOrDefaultAsync(m => m.MainID == id);
            if (pP_ProjectContacts == null)
            {
                return NotFound();
            }

            _context.ProjectContacts.Remove(pP_ProjectContacts);
            await _context.SaveChangesAsync();

            return Ok(pP_ProjectContacts);
        }

        private bool PP_ProjectContactsExists(int id)
        {
            return _context.ProjectContacts.Any(e => e.MainID == id);
        }
    }
}