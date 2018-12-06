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
    [Route("api/[controller]")]
    [ApiController]
    public class PP_TaskStatusesController : ControllerBase
    {
        private readonly Context _context;

        public PP_TaskStatusesController(Context context)
        {
            _context = context;
        }

        // GET: api/PP_TaskStatuses
        [HttpGet]
        public IEnumerable<PP_TaskStatuses> GetTaskStatuses()
        {
            return _context.TaskStatuses;
        }

        // GET: api/PP_TaskStatuses/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetPP_TaskStatuses([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var pP_TaskStatuses = await _context.TaskStatuses.FindAsync(id);

            if (pP_TaskStatuses == null)
            {
                return NotFound();
            }

            return Ok(pP_TaskStatuses);
        }

        // PUT: api/PP_TaskStatuses/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPP_TaskStatuses([FromRoute] int id, [FromBody] PP_TaskStatuses pP_TaskStatuses)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != pP_TaskStatuses.TaskStatusID)
            {
                return BadRequest();
            }

            _context.Entry(pP_TaskStatuses).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PP_TaskStatusesExists(id))
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

        // POST: api/PP_TaskStatuses
        [HttpPost]
        public async Task<IActionResult> PostPP_TaskStatuses([FromBody] PP_TaskStatuses pP_TaskStatuses)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.TaskStatuses.Add(pP_TaskStatuses);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPP_TaskStatuses", new { id = pP_TaskStatuses.TaskStatusID }, pP_TaskStatuses);
        }

        // DELETE: api/PP_TaskStatuses/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePP_TaskStatuses([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var pP_TaskStatuses = await _context.TaskStatuses.FindAsync(id);
            if (pP_TaskStatuses == null)
            {
                return NotFound();
            }

            _context.TaskStatuses.Remove(pP_TaskStatuses);
            await _context.SaveChangesAsync();

            return Ok(pP_TaskStatuses);
        }

        private bool PP_TaskStatusesExists(int id)
        {
            return _context.TaskStatuses.Any(e => e.TaskStatusID == id);
        }
    }
}