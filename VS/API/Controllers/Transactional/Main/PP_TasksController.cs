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
    [Route("api/PP_Tasks")]
    public class PP_TasksController : Controller
    {
        private readonly Context _context;

        public PP_TasksController(Context context)
        {
            _context = context;
        }

        // GET: api/PP_Tasks
        [HttpGet]
        public IEnumerable<PP_Tasks> GetTasks()
        {
            return _context.Tasks;
        }

        // GET: api/PP_Tasks/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetPP_Tasks([FromRoute] Guid id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var pP_Tasks = await _context.Tasks.SingleOrDefaultAsync(m => m.TaskID == id);

            if (pP_Tasks == null)
            {
                return NotFound();
            }

            return Ok(pP_Tasks);
        }

        // PUT: api/PP_Tasks/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPP_Tasks([FromRoute] Guid id, [FromBody] PP_Tasks pP_Tasks)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != pP_Tasks.TaskID)
            {
                return BadRequest();
            }

            _context.Entry(pP_Tasks).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PP_TasksExists(id))
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

        // POST: api/PP_Tasks
        [HttpPost]
        public async Task<IActionResult> PostPP_Tasks([FromBody] PP_Tasks pP_Tasks)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Tasks.Add(pP_Tasks);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPP_Tasks", new { id = pP_Tasks.TaskID }, pP_Tasks);
        }

        // DELETE: api/PP_Tasks/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePP_Tasks([FromRoute] Guid id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var pP_Tasks = await _context.Tasks.SingleOrDefaultAsync(m => m.TaskID == id);
            if (pP_Tasks == null)
            {
                return NotFound();
            }

            _context.Tasks.Remove(pP_Tasks);
            await _context.SaveChangesAsync();

            return Ok(pP_Tasks);
        }

        private bool PP_TasksExists(Guid id)
        {
            return _context.Tasks.Any(e => e.TaskID == id);
        }
    }
}